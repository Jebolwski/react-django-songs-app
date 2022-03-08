from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('songs/', views.Songs,name='songs'),
    path('songs/<str:pk>/', views.SongDetail,name = 'song-detail'),
    path('songs/add/', views.AddSong,name='song-add'),
    path('songs/<str:pk>/update/', views.UpdateSong,name='song-update'),
    path('songs/<str:pk>/delete/', views.DeleteSong,name='song-delete'),
]
