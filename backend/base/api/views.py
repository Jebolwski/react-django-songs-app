from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from ..models import Song


from .serializers import SongSerializer, UserSerializer



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
        '/register/',
        '/songs/',
        '/add-song/',
        '/song/<int:pk>',
    ]

    return Response(routes)

@api_view(['GET','POST'])
def RegisterUser(request):
    if request.method=='POST':
        user = request.data
        serializer = UserSerializer(data = user)
        print(user)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    return Response("Enter user data!")



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getSong(request):
    user = request.user
    songs = user.song_set.all()
    serializer = SongSerializer(songs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def SongDetail(request,pk):
    song = Song.objects.get(id=pk)
    serializer = SongSerializer(song, many=False)
    return Response(serializer.data)

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def AddSong(request):
    user = request.user
    if request.method=="POST":
        fake_data = request.data.copy()
        fake_data['owner'] = request.user.id
        serializer = SongSerializer(data = fake_data)
        if serializer.is_valid():
            serializer.save()
    return Response(serializer.data)

@api_view(['GET','PUT'])
@permission_classes([IsAuthenticated])
def EditSong(request,pk):
    fake_data = request.data.copy()
    fake_data['owner'] = request.user.id
    song = Song.objects.get(id=pk)
    serializer= SongSerializer(instance=song,data=fake_data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET','DELETE'])
@permission_classes([IsAuthenticated])
def DeleteSong(request,pk):
    song = Song.objects.get(id=pk)
    song.delete()
    return Response("Song Deleted")

@api_view(['GET'])
def ReccomendedSongs(request):
    user = User.objects.get(username = "Yönetici")
    songs = Song.objects.all().filter(owner=user)
    serializer = SongSerializer(songs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def AllUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)