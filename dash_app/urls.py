from django.urls import path
from dash_app import views


urlpatterns = [
    path("dashboard", views.dashboard),
    path("login", views.login),
    path("register", views.register),
    path("quote", views.quote),
    path("", views.index),
]
