from django.contrib import admin
from django.urls import path,include

#from ninja inport NinjaAPI 

urlpatterns = [
    path('admin/', admin.site.urls),
    path("accounts/", include("allauth.urls")),
    path("_allauth/", include("allauth.headless.urls")),
]
