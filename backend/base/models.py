from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Song(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    artist = models.TextField(max_length=200,null=False,blank=False)
    name = models.TextField(max_length=200,null=False,blank=False)
    duration = models.DurationField(null=False,blank=False)
    url = models.URLField(max_length=300,null=True,blank=True)
    created     = models.DateTimeField(
        auto_now_add=True, blank=True, null=True)
    updated     = models.DateTimeField(auto_now=True,blank=True, null=True)
    def __str__(self):
        return self.name

STATUS_CHOICES=(
    ("Approved","Approved"),
    ("Not Approved","Not Approved"),
    ("On Wait","On Wait"),
    ("Blocked","Blocked"),
)
class UserStatus(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True,blank=True)
    username = models.CharField(max_length=100,null=True,blank=True)
    email = models.CharField(max_length=100,null=True,blank=True)
    status = models.CharField(max_length=14,choices=STATUS_CHOICES,null=True,blank=True)
    created     = models.DateTimeField(
        auto_now_add=True, blank=True, null=True)
    updated     = models.DateTimeField(auto_now=True,blank=True, null=True)
    def __str__(self):
        return str(self.user.username)
