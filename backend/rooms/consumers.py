from channels.generic.websocket import AsyncJsonWebsocketConsumer
from channels.layers import get_channel_layer
import asyncio
from backend.middleware import JWTAuthMiddleware
from channels.db import database_sync_to_async
from django.apps import apps
from django.utils import timezone


class NormalRoomConsumer(AsyncJsonWebsocketConsumer):
    rooms = {}
    rooms_lock = asyncio.Lock()

    async def connect(self) -> None:
        self.room_id = self.scope["url_route"]["kwargs"]["room_id"]
        self.channel_layer = get_channel_layer()
        await self.channel_layer.group_add(self.room_id, self.channel_name)
        await self.accept()  # WebSocket 연결 수락

    async def receive_json(self, content: dict) -> None:
        if content["type"] == "access":
            token = content["token"]
            try:
                self.user = await JWTAuthMiddleware.get_user(token)
            except:
                await self.send_json({"access": "User invalid or expired."})
                return
            if not self.user.is_authenticated:
                await self.send_json({"access": "User not authenticated."})
                return
            await self.send_json({"access": "Access successful."})

            async with NormalRoomConsumer.rooms_lock:
                # 방이 없는 경우 새로 생성
                if self.room_id not in TournamentRoomConsumer.rooms:
                    TournamentRoomConsumer.rooms[self.room_id] = []
                TournamentRoomConsumer.rooms[self.room_id].append(self.user)
                # 정원에 도달한 방에 입장을 시도하는 경우 에러 (code=4003)
                if len(NormalRoomConsumer.rooms[self.room_id]) > 2:
                    await self.channel_layer.group_discard(
                        self.room_id, self.channel_name
                    )
                    NormalRoomConsumer.rooms[self.room_id].remove(self.user)
                    await self.send_json({"type": "full"})
                    return

            # 연결 성공 시 방 참여 인원 모두에게 방 인원 정보 전송
            current_player = await self.update_current_player(
                len(NormalRoomConsumer.rooms[self.room_id])
            )
            await self.send_user_info()

            # 방 인원이 정원인 경우 연결 해제 요청
            async with NormalRoomConsumer.rooms_lock:
                if current_player == 2:
                    await self.create_game_result()
                    await self.delete_room()
                    await self.channel_layer.group_send(
                        self.room_id,
                        {
                            "type": "send_disconnect",
                            "room_id": self.room_id,
                        },
                    )

    async def send_user_info(self) -> None:
        """
        해당 방의 모든 유저 정보를 수집하여 전송
        """
        username_list = [
            user.username for user in NormalRoomConsumer.rooms[self.room_id]
        ]
        user_image_list = [
            str(user.image) for user in NormalRoomConsumer.rooms[self.room_id]
        ]
        user_win_list = [user.win for user in NormalRoomConsumer.rooms[self.room_id]]
        user_lose_list = [user.lose for user in NormalRoomConsumer.rooms[self.room_id]]
        await self.channel_layer.group_send(
            self.room_id,
            {
                "type": "broadcast_users",
                "username": username_list,
                "user_image": user_image_list,
                "user_win": user_win_list,
                "user_lose": user_lose_list,
            },
        )

    async def broadcast_users(self, event: dict) -> None:
        """
        방에 있는 유저 정보를 모두에게 전송
        """
        username_list = event["username"]
        user_image_list = event["user_image"]
        user_win_list = event["user_win"]
        user_lose_list = event["user_lose"]
        user_data = {
            "type": "users",
            "user1": "",
            "user1_image": "",
            "user1_win": "",
            "user1_lose": "",
            "user2": "",
            "user2_image": "",
            "user2_win": "",
            "user2_lose": "",
        }
        for idx, username in enumerate(username_list, start=0):
            user_data[f"user{idx}"] = username
            user_data[f"user{idx}_image"] = user_image_list[idx]
            user_data[f"user{idx}_win"] = user_win_list[idx]
            user_data[f"user{idx}_lose"] = user_lose_list[idx]

        await self.send_json(user_data)

    async def send_disconnect(self, event: dict) -> None:
        room_id = event["room_id"]
        data = {
            "type": "start_game",
            "room_id": room_id,
        }
        await self.send_json(data)

    async def disconnect(self, close_code: int) -> None:
        async with NormalRoomConsumer.rooms_lock:
            if self.room_id in NormalRoomConsumer.rooms:
                if self.user in NormalRoomConsumer.rooms[self.room_id]:
                    NormalRoomConsumer.rooms[self.room_id].remove(self.user)
                    # 더 이상 참여자가 없으면 방 삭제
                    if not NormalRoomConsumer.rooms[self.room_id]:
                        del NormalRoomConsumer.rooms[self.room_id]
        # Leave room group
        await self.channel_layer.group_discard(self.room_id, self.channel_name)
        await self.close()

    @database_sync_to_async
    def create_game_result(self) -> None:
        room_model = apps.get_model("rooms", "Room")
        game_model = apps.get_model("game", "GameResult")
        room = room_model.objects.get(id=self.room_id)
        game_model.objects.create(
            id=self.room_id,
            game_map=room.game_map,
            game_speed=room.game_speed,
            ball_color=room.ball_color,
            start_time=timezone.now(),
        )

    @database_sync_to_async
    def update_current_player(self, player: int) -> int:
        room_model = apps.get_model("rooms", "Room")
        room = room_model.objects.get(id=self.room_id)
        room.current_player = player
        room.save()
        return player

    @database_sync_to_async
    def delete_room(self) -> None:
        room_model = apps.get_model("rooms", "Room")
        try:
            room = room_model.objects.get(id=self.room_id)
            room.delete()
        except room_model.DoesNotExist:
            return


class TournamentRoomConsumer(AsyncJsonWebsocketConsumer):
    rooms = {}
    rooms_lock = asyncio.Lock()

    async def connect(self):
        self.room_id = self.scope["url_route"]["kwargs"]["room_id"]
        self.channel_layer = get_channel_layer()
        await self.channel_layer.group_add(self.room_id, self.channel_name)
        await self.accept()  # WebSocket 연결 수락

    async def receive_json(self, content: dict) -> None:
        if content["type"] == "access":
            token = content["token"]
            try:
                self.user = await JWTAuthMiddleware.get_user(token)
            except:
                await self.send_json({"access": "User invalid or expired."})
                return
            if not self.user.is_authenticated:
                await self.send_json({"access": "User not authenticated."})
                return
            await self.send_json({"access": "Access successful."})

            async with TournamentRoomConsumer.rooms_lock:
                # 방이 없는 경우 새로 생성
                if self.room_id not in TournamentRoomConsumer.rooms:
                    TournamentRoomConsumer.rooms[self.room_id] = []
                TournamentRoomConsumer.rooms[self.room_id].append(self.user)
                # 정원에 도달한 방에 입장을 시도하는 경우 에러 (code=4003)
                if len(TournamentRoomConsumer.rooms[self.room_id]) > 4:
                    await self.channel_layer.group_discard(
                        self.room_id, self.channel_name
                    )
                    TournamentRoomConsumer.rooms[self.room_id].remove(self.user)
                    await self.send_json({"type": "full"})
                    return

            # 대기실 참여 성공
            current_player = await self.update_current_player(
                len(TournamentRoomConsumer.rooms[self.room_id])
            )
            await self.send_user_info()

            # 방 인원이 정원인 경우 연결 해제 요청
            async with NormalRoomConsumer.rooms_lock:
                if current_player == 4:
                    await self.create_game_result()
                    await self.delete_room()
                    await self.channel_layer.group_send(
                        self.room_id,
                        {
                            "type": "send_disconnect",
                            "room_id": self.room_id,
                        },
                    )

    async def send_user_info(self) -> None:
        """
        해당 방의 모든 유저 정보를 수집하여 전송
        """
        username_list = [
            user.username for user in NormalRoomConsumer.rooms[self.room_id]
        ]
        user_image_list = [
            str(user.image) for user in NormalRoomConsumer.rooms[self.room_id]
        ]
        user_win_list = [user.win for user in NormalRoomConsumer.rooms[self.room_id]]
        user_lose_list = [user.lose for user in NormalRoomConsumer.rooms[self.room_id]]
        await self.channel_layer.group_send(
            self.room_id,
            {
                "type": "broadcast_users",
                "username": username_list,
                "user_image": user_image_list,
                "user_win": user_win_list,
                "user_lose": user_lose_list,
            },
        )

    async def broadcast_users(self, event: dict) -> None:
        """
        방에 있는 유저 정보를 모두에게 전송
        """
        username_list = event["username"]
        user_image_list = event["user_image"]
        user_win_list = event["user_win"]
        user_lose_list = event["user_lose"]
        user_data = {
            "type": "users",
            "user1": "",
            "user1_image": "",
            "user1_win": "",
            "user1_lose": "",
            "user2": "",
            "user2_image": "",
            "user2_win": "",
            "user2_lose": "",
            "user3": "",
            "user3_image": "",
            "user3_win": "",
            "user3_lose": "",
            "user4": "",
            "user4_image": "",
            "user4_win": "",
            "user4_lose": "",
        }
        for idx, username in enumerate(username_list, start=0):
            user_data[f"user{idx}"] = username
            user_data[f"user{idx}_image"] = user_image_list[idx]
            user_data[f"user{idx}_win"] = user_win_list[idx]
            user_data[f"user{idx}_lose"] = user_lose_list[idx]

        await self.send_json(user_data)

    async def send_disconnect(self, event: dict) -> None:
        players = TournamentRoomConsumer.rooms[self.room_id]
        match_1 = players[:2]
        match_2 = players[2:]
        room_id = event["room_id"]

        for player in match_1:
            await player.send_json(
                {
                    "type": "start_game",
                    "room_id": room_id,
                    "opponent": [p.user.username for p in match_1 if p != player],
                }
            )
        for player in match_2:
            await player.send_json(
                {
                    "type": "start_game",
                    "room_id": room_id,
                    "opponent": [p.user.username for p in match_2 if p != player],
                }
            )

    async def disconnect(self, close_code: int) -> None:
        async with TournamentRoomConsumer.rooms_lock:
            if self.room_id in TournamentRoomConsumer.rooms:
                if self.user in TournamentRoomConsumer.rooms[self.room_id]:
                    TournamentRoomConsumer.rooms[self.room_id].remove(self.user)
                    if not TournamentRoomConsumer.rooms[self.room_id]:
                        del TournamentRoomConsumer.rooms[self.room_id]
        await self.channel_layer.group_discard(self.room_id, self.channel_name)
        await self.close()

    @database_sync_to_async
    def create_game_result(self) -> None:
        room_model = apps.get_model("rooms", "Room")
        game_model = apps.get_model("game", "GameResult")
        room = room_model.objects.get(id=self.room_id)
        game_model.objects.create(
            id=self.room_id,
            game_map=room.game_map,
            game_speed=room.game_speed,
            ball_color=room.ball_color,
            start_time=timezone.now(),
        )

    @database_sync_to_async
    def update_current_player(self, player: int) -> int:
        room_model = apps.get_model("rooms", "Room")
        room = room_model.objects.get(id=self.room_id)
        room.current_player = player
        room.save()
        return player

    @database_sync_to_async
    def delete_room(self) -> None:
        room_model = apps.get_model("rooms", "Room")
        try:
            room = room_model.objects.get(id=self.room_id)
            room.delete()
        except room_model.DoesNotExist:
            return
