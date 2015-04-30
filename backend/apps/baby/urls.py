from django.conf.urls import patterns, url
from views import *

urlpatterns = patterns('',
    url('^baby/$', Family.as_view(), name='family')

    )



