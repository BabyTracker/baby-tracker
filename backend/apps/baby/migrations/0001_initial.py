# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Kid',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100)),
                ('date_of_birth', models.DateField()),
                ('gender', models.IntegerField(default=1, choices=[(1, b'Female'), (2, b'Male')])),
                ('birth_time', models.TimeField()),
                ('birth_length', models.IntegerField()),
                ('birth_weight', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('photo', models.ImageField(upload_to=b'')),
            ],
        ),
        migrations.CreateModel(
            name='Update',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('date', models.DateField()),
                ('height', models.IntegerField()),
                ('weight', models.IntegerField()),
                ('notes', models.TextField()),
                ('age', models.IntegerField()),
                ('kid', models.ForeignKey(related_name='kid', to='baby.Kid')),
                ('photo', models.ManyToManyField(to='baby.Photo')),
                ('update', models.ManyToManyField(related_name='kid_update', to='baby.Kid')),
            ],
        ),
        migrations.CreateModel(
            name='Vaccines',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100)),
                ('date', models.DateField()),
                ('update', models.ForeignKey(to='baby.Update')),
            ],
        ),
    ]
