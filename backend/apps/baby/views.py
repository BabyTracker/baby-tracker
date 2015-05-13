from rest_framework import generics
from serializers import *


class KidList(generics.ListAPIView):
    serializer_class = KidSerializer
    queryset = Kid.objects.filter(name="Sue")  # update this value to filter by username


class UpdateList(generics.ListAPIView):
    serializer_class = UpdateSerializer

    def get_queryset(self):
        pk = self.kwargs["pk"]
        return Update.objects.filter(kid__pk=pk)


class SaveUpdate(generics.CreateAPIView):
    serializer_class = UpdateSerializer


class KidView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = KidSerializer
    queryset = Kid.objects.all()


# class UpdateDetail(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = UpdateSerializer
#     queryset = Update.objects.all()