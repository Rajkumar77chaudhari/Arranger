from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import viewsets, filters, generics, permissions
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .serializers import ServiceSerializer, UserSerializer
from .models import Service, User
from rest_framework import generics

# Create your views here.


class ServiceList(viewsets.ModelViewSet):

    serializer_class = ServiceSerializer
    queryset = Service.objects.all()


class ServiceView(viewsets.ModelViewSet):
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        services = Service.objects.all()
        serializer = ServiceSerializer(services, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        services_serializer = ServiceSerializer(data=request.data)
        if services_serializer.is_valid():
            services_serializer.save()
            return Response(services_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', services_serializer.errors)
            return Response(services_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(user_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', user_serializer.errors)
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
