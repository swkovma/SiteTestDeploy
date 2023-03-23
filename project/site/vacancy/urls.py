from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from .settings import STATIC_ROOT, STATIC_URL

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("main.urls"))
].extend(static(STATIC_URL, document_root=STATIC_ROOT))
