from rest_framework import serializers
from models import *


class KidSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kid
