from django.db import models
# from django.contrib.auth.models import User


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

    def __str__(self):
        return self.name


class Photo(models.Model):
    photo = models.ImageField(upload_to='photos')


class Update(models.Model):

    date = models.DateField()
    height_feet = models.IntegerField()
    height_inches = models.IntegerField()
    weight_pounds = models.IntegerField()
    weight_ounces = models.IntegerField()
    photo = models.ManyToManyField(Photo, blank=True, null=True)
    notes = models.TextField()
    kid = models.ForeignKey(Kid, related_name="kid")  # this refers to the issue with reverse access
    age = models.IntegerField()

    def __str__(self):
        return "%s: %s (%s)" % (self.kid.name, self.date, self.kid.id)


class Vaccine(models.Model):

    name = models.CharField(max_length=100)
    date = models.DateField()
    update = models.ForeignKey(Update)
