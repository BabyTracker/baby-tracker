from rest_framework import generics
from serializers import *
from django.http import HttpResponse
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
import json


class KidList(generics.ListAPIView):
    serializer_class = KidSerializer

    def get_queryset(self):
        return Kid.objects.filter(owner=self.request.user)


class UpdateList(generics.ListCreateAPIView):
    serializer_class = UpdateSerializer

    def get_queryset(self):
        pk = self.kwargs["pk"]
        return Update.objects.filter(kid__pk=pk)


class SaveUpdate(generics.CreateAPIView):
    serializer_class = UpdateSerializer


class KidView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = KidSerializer
    queryset = Kid.objects.all()


class NewKid(generics.CreateAPIView):
    serializer_class = KidSerializer


class GetUserInfo(generics.RetrieveAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def retrieve(self, request, *args, **kwargs):
        user = UserSerializer(request.user)
        return HttpResponse(json.dumps(user.data))


class Registration(generics.CreateAPIView):
    serializer_class = UserSerializer
