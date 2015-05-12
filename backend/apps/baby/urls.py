from django.conf.urls import patterns, url
from views import KidList, UpdateList, SaveUpdate

urlpatterns = patterns('',
    url('^kids/$', KidList.as_view(), name='family'),
    url('^kids/(?P<pk>[0-9]+)/$', KidDetail.as_view(), name='kid-detail'),
    url('^kids/(?P<pk>[0-9]+)/updates/$', UpdateList.as_view(), name='update'),
    url('^kids/(?P<pk>[0-9]+)/save-update/$', SaveUpdate.as_view(), name='save-update'),
    # url('^kids/(?P<pk>[0-9]+)/updates/(?P<pk>[0-9]+)/$', UpdateDetail.as_view(), name='update-detail'),
    )
