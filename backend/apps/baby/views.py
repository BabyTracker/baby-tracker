from rest_framework import generics
from serializers import *

# Create your views here.

class Family(generics.ListAPIView):
    serializer_class =  KidSerializer
    queryset = Kid.objects.all() # update this value to filter by username

