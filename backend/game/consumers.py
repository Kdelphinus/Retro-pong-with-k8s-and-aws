from channels.generic.websocket import AsyncJsonWebsocketConsumer
from channels.db import database_sync_to_async
from django.apps import apps
from .modules import Ball, Player, Game
import asyncio
from backend.middleware import JWTAuthMiddleware


class GameConsumer(AsyncJsonWebsocketConsumer):
    games: dict[str, Game] = {}
    games_lock = asyncio.Lock()

    async def connect(self) -> None:
        """
        url data 유효성 확인
        """
        self.game_id = self.scope["url_route"]["kwargs"]["game_id"]
        try:
            GameResult = apps.get_model("game", "GameResult")
            self.result = GameResult.objects.get(game_id=self.game_id)
        except GameResult.DoesNotExist:
            await self.close()  # 해당하는 game_id가 없을 경우 연결 해제
        await self.accept()  # 소켓 연결 수락
        await self.channel_layer.group_add(
            self.game_id,  # 게임 DB id
            self.channel_name,  # Consumer 채널 이름
        )

    async def receive_json(self, content) -> None:
        if content["type"] == "access":
            await self.user_access(content)
        else:
            match = GameConsumer.games[self.game_id]
            player = match.players[self.color]
            if content["type"] == "ready":
                if match.set_ready(player):
                    self.loop = asyncio.create_task(self.game_loop(player))
            elif content["type"] == "move":
                player.set_pos(content["y"], content["z"])

    async def game_loop(self, player) -> None:
        while True:
            match = GameConsumer.games[self.game_id]
            if not match:
                return
            await asyncio.sleep(0.03)
            match.game_render(player)
            await self.channel_layer.group_send(self.game_id, match.game_data())
            if match.winner:
                await self.channel_layer.group_send(
                    self.game_id, match.result_data(self.game_id)
                )
                break

    async def disconnect(self) -> None:
        del GameConsumer.games[self.game_id]
        await self.channel_layer.group_send(
            self.game_id,
            {
                "type": "close_group",
            },
        )

    async def close_group(self, event) -> None:
        await self.send_json({"error": "user_exit"})
        await self.channel_layer.group_discard()
        # await self.close()

    async def user_access(self, content) -> None:
        token = content["token"]
        try:
            self.user = await JWTAuthMiddleware.get_user(token)
        except Exception as e:
            await self.send_json({"access": "User invalid or expired."})
            return
        if not self.user.is_authenticated:
            await self.send_json({"access": "User not authenticated."})
            return
        else:
            await self.send_json({"access": "Access successful."})
        # Game 객체 생성
        if self.game_id not in GameConsumer.games:
            GameConsumer.games[self.game_id] = Game()
        match = GameConsumer.games[self.game_id]
        # 들어온 순서대로 red, blue 배정
        if match.p1 is None:
            match.p1 = Player(type="red", nick=self.user.username)
            self.color = "red"
        elif match.p2 is None:
            match.p2 = Player(type="blue", nick=self.user.username)
            self.color = "blue"
        else:
            await self.send_json({"error": "Game is full."})
            return
        # start data 전송
        self.send_json(match.start_data(color=self.color, game=self.result))


# class GameTournamentConsumer(AsyncJsonWebsocketConsumer):
