from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User


class Kid(models.Model):

    GENDER_CHOICES = (
        (1, 'Female'),
        (2, 'Male'),
    )

    name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    gender = models.IntegerField(choices=GENDER_CHOICES, default=1)
    birth_time = models.TimeField()
    birth_length = models.FloatField()
    birth_weight_pounds = models.IntegerField(default=0)
    birth_weight_ounces = models.IntegerField(default=0)
    photo = models.ImageField(upload_to='photos', blank=True, null=True)
    owner = models.ForeignKey(User, related_name="parent")

    def __str__(self):
        return self.name


class Update(models.Model):

    date = models.DateField()
    height_feet = models.IntegerField()
    height_inches = models.IntegerField()
    weight_pounds = models.IntegerField()
    weight_ounces = models.IntegerField()
    photo = models.ImageField(upload_to='photos', blank=True, null=True)
    notes = models.TextField(blank=True, null=True)
    kid = models.ForeignKey(Kid, related_name="kid")  # this refers to the issue with reverse access
    age = models.IntegerField()

    def __str__(self):
        return "%s: %s (%s)" % (self.kid.name, self.date, self.kid.id)


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)