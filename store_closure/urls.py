from django.urls import path
from . import views
from django.contrib import admin

urlpatterns = [
    path('', views.index, name='index'),
    path('admin/', admin.site.urls),
    path('api/homedata/locations/', views.homedata_location_list, name='homedata_location_list'),
    path('api/marketdata/locations/', views.marketdata_location_list, name='marketdata_location_list'),
]