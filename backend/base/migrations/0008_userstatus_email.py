# Generated by Django 4.0 on 2022-03-22 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_userstatus_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='userstatus',
            name='email',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
