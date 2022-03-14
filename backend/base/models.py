import re
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Song(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    artist = models.TextField(max_length=200,null=False,blank=False)
    name = models.TextField(max_length=200,null=False,blank=False)
    duration = models.DurationField(null=False,blank=False)

    def __str__(self):
        return self.name
