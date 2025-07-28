from django.urls import path
from . import views

urlpatterns=[
    path("same/",views.sample),
    path("postdata/",views.post_data),
    path("getdata/",view=views.get_users),
]


