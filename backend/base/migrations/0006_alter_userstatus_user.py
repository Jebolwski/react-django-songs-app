# Generated by Django 4.0 on 2022-03-22 09:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('base', '0005_song_created_song_updated_userstatus_created_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userstatus',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='auth.user'),
        ),
    ]
