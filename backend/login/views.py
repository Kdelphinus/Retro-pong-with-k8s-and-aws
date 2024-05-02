from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from django.http import JsonResponse
from .serializers import RegisterSerializer
from users.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import authenticate
from django.shortcuts import render


class IntraView(APIView):
    def get(self, request):
        return Response("intra")


class EmailLoginView(APIView):
    @swagger_auto_schema(
        tags=["login"],  # Api 이름
        operation_description="email 로그인",  # 기능 설명
        manual_parameters=[
            openapi.Parameter(
                "email", openapi.IN_QUERY, description="Email", type=openapi.TYPE_STRING
            ),
            openapi.Parameter(
                "pw", openapi.IN_QUERY, description="Password", type=openapi.TYPE_STRING
            ),
        ],
        responses={400: "BAD_REQUEST", 500: "SERVER_ERROR"},  # 할당된 요청
    )
    def get(self, request):
        email = request.query_params.get("email")
        password = request.query_params.get("pw")

        # Check if user exists
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response(
                {"error": "User does not exist."}, status=status.HTTP_400_BAD_REQUEST
            )

        # Check password
        if user.check_password(password):
            # Generate JWT tokens
            token = TokenObtainPairSerializer.get_token(user)
            refresh_token = str(token)
            access_token = str(token.access_token)
            response = Response(
                {
                    "message": "Login successful",
                    "user": user.username,
                    "jwt": {
                        "access_token": access_token,
                        "refresh_token": refresh_token,
                    },
                },
                status=status.HTTP_200_OK,
            )
            response.set_cookie("refresh_token", refresh_token, httponly=True)
            response.set_cookie("access_token", access_token, httponly=True)
            return response

        # If password does not match
        else:
            return Response(
                {"error": "Authentication failed. Invalid password."},
                status=status.HTTP_400_BAD_REQUEST,
            )


class EmailRegisterView(APIView):
    @swagger_auto_schema(
        tags=["login"],  # Api 이름
        operation_description="email 회원가입",  # 기능 설명
        request_body=RegisterSerializer,
        responses={400: "BAD_REQUEST", 500: "SERVER_ERROR"},  # 할당된 요청
    )
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            errors = serializer.errors
            return JsonResponse(errors, status=status.HTTP_400_BAD_REQUEST)


class TestView(APIView):
    @swagger_auto_schema(
        tags=["login"],  # Api 이름
        operation_description="Register/login test용",  # 기능 설명
        manual_parameters=[  # 인자 형식
            openapi.Parameter(
                "user",
                openapi.IN_QUERY,
                description="username",
                type=openapi.TYPE_STRING,
            )
        ],
    )
    def get(self, request):
        try:
            user = User.objects.get(username=request.query_params.get("user"))
            return Response({"user:" + user.username})
        except User.DoesNotExist:
            return Response("No such user:")
