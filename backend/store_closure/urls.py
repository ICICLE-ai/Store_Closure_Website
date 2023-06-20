from django.urls import path
from . import views
from django.contrib import admin

urlpatterns = (
    # path('', views.index, name='index'),
    path('submit-form/', views.submit_form, name='submit_form'),
    path('homedata/locations/', views.homedata_location_list, name='homedata_location_list'),
    path('marketdata/locations/', views.marketdata_location_list, name='marketdata_location_list'),
    path('ping/', views.ping, name='ping'),
    path('delete-file/', views.delete_file, name='delete_file'),
)