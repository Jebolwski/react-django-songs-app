from rest_framework.serializers import ModelSerializer
from base.models import Song
from django.contrib.auth.models import User
from passlib.hash import pbkdf2_sha256

class SongSerializer(ModelSerializer):
    class Meta:
        model = Song
        fields = '__all__'


class UserSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = ['id','username','email','password']

        extra_kwargs = {'password':{
            'write_only':True,
            'required' :True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

    