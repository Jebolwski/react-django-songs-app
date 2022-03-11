from urllib import response
from django.shortcuts import redirect, render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import SongSerializer,UserSerializer
from .models import Song
from django.contrib.auth import authenticate
from django.contrib.auth import login
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def Songs(request):
    songs = Song.objects.all()
    serializer = SongSerializer(songs,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def SongDetail(request,pk):
    song = Song.objects.get(id=pk)
    serializer = SongSerializer(song,many=False)
    return Response(serializer.data)

@api_view(['POST'])
def AddSong(request):
    serializer = SongSerializer(data = request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['PUT'])
def UpdateSong(request,pk):
    instance = Song.objects.get(id=pk)
    serializer = SongSerializer(instance=instance,data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['GET','DELETE'])
def DeleteSong(request,pk):
    song = Song.objects.get(id=pk)
    song.delete()
    return redirect('songs')
    return Response('Song Deleted!')




