from django.conf.urls import patterns, include, url
from django.conf import settings
from django.contrib import admin
from rest_framework.authtoken import views
from views import *


urlpatterns = patterns('',
    url('^kids/$', KidList.as_view(), name='family'),
    url('^landing/$', KidList.as_view(), name='family'),
    url('^register-user/$', Registration.as_view(), name='registration'),
    url('^api-token-auth/', views.obtain_auth_token),
    url('^get-user-info/', GetUserInfo.as_view(), name='get-user-info'),
    url('^kids/(?P<pk>[0-9]+)/$', KidView.as_view(), name='kid-view'),
    url('^new-kid/$', NewKid.as_view(), name='new-kid'),
    url('^kids/(?P<pk>[0-9]+)/updates/$', UpdateList.as_view(), name='update'),
    url('^kids/(?P<pk>[0-9]+)/save-update/$', SaveUpdate.as_view(), name='save-update'),
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
    # url('^kids/(?P<pk>[0-9]+)/updates/(?P<pk>[0-9]+)/$', UpdateDetail.as_view(), name='update-detail'),
    )
