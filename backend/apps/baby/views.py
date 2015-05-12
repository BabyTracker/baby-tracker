from rest_framework import generics
from serializers import *


class KidList(generics.ListAPIView):
    serializer_class = KidSerializer
    queryset = Kid.objects.all()  # update this value to filter by username


class UpdateList(generics.ListAPIView):
    serializer_class = UpdateSerializer
    queryset = Update.objects.all()


# class UpdateDetail(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = UpdateSerializer
#     queryset = Update.objects.all()