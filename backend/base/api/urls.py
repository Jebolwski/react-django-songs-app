from django.urls import path
from . import views
from .views import AllUsers, MyTokenObtainPairView, ReccomendedSongs

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('', views.getRoutes),
    path('songs/', views.getSong),
    path('song/<int:pk>/', views.SongDetail),
    path('song/<int:pk>/delete/', views.DeleteSong),
    path('song/<int:pk>/edit/', views.EditSong),
    path('add-song/', views.AddSong),
    path('register/', views.RegisterUser,name="register"),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('reccomended-songs/', ReccomendedSongs, name='reccomended-songs'),
    path('all-users/', views.AllUsers, name='all-users'),
]
