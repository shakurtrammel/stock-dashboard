from django.urls import path
from dash_app import views


urlpatterns = [
    path("quote", views.quote),
    path("", views.home),
]
