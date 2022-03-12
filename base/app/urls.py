from django.contrib import admin
from django.urls import path,include
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('songs/', views.ReccomendedSongs,name='songs'),
    path('user-songs/', views.UserSongs,name='user-songs'),
    path('songs/<int:pk>/', views.SongDetail,name='song-detail'),
    path('songs/add/', views.AddSong,name='song-add'),
    path('songs/<int:pk>/update/', views.UpdateSong,name='song-update'),
    path('songs/<int:pk>/delete/', views.DeleteSong,name='song-delete'),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
