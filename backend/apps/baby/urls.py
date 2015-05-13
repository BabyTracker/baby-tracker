from django.conf.urls import patterns, url
from views import KidList, UpdateList, SaveUpdate, KidView, NewKid


urlpatterns = patterns('',
    url('^kids/$', KidList.as_view(), name='family'),
    url('^kids/(?P<pk>[0-9]+)/$', KidView.as_view(), name='kid-view'),
    url('^new-kid/$', NewKid.as_view(), name='new-kid'),
    url('^kids/(?P<pk>[0-9]+)/updates/$', UpdateList.as_view(), name='update'),
    url('^kids/(?P<pk>[0-9]+)/save-update/$', SaveUpdate.as_view(), name='save-update'),
    # url('^kids/(?P<pk>[0-9]+)/updates/(?P<pk>[0-9]+)/$', UpdateDetail.as_view(), name='update-detail'),
    )
