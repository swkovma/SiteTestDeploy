from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="main"),
    path("voice", views.voice, name="voice"),
    path("questions", views.questions, name="questions"),
    path("upgrade-answer", views.upgrade_answer, name="upgrade-answer")
]
