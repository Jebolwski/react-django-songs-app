from django.contrib import admin

# Register your models here.

from .models import Song, UserStatus
admin.site.register(Song)
admin.site.register(UserStatus)
