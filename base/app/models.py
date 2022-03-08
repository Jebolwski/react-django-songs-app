from django.db import models


GENRES = (
    ('Rock','Rock'),
    ('Rap','Rap'),
    ('Pop','Pop'),
    ('Blues','Blues'),
    ('Jazz','Jazz'),
    ('Metal','Metal'),
    ('Other','Other'),
)

class Song(models.Model):
    name = models.CharField(max_length=50,null=False,blank=False)
    artist = models.CharField(max_length=50,null=False,blank=False)
    duration = models.IntegerField(null=False,blank=False)
    genres = models.CharField(choices=GENRES, max_length=6,null=False,blank=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.name