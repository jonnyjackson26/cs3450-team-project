from django.contrib import admin
from django.urls import path
from . import views  # Import the views module

urlpatterns = [
    path('', views.home),  # Root path
    path('admin/', admin.site.urls),
    path('chatgpt/', views.getChatGPTResponse),  # The chatbot endpoint
]
