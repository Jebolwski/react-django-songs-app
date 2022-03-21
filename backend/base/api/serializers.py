from rest_framework.serializers import ModelSerializer
from base.models import Song,UserStatus
from django.contrib.auth.models import User

class SongSerializer(ModelSerializer):
    class Meta:
        model = Song
        fields = '__all__'

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','password','is_superuser','date_joined','last_login','is_authenticated']

        extra_kwargs = {'password':{
            'write_only':True,
            'required' :True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class UserStatusSerializer(ModelSerializer):
    class Meta:
        model = UserStatus
        fields = "__all__"

    