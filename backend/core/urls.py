from django.contrib import admin
from django.urls import path
from boutique.admin import boutique_site


urlpatterns = [
    path('boutiqueadmin/', boutique_site.urls),
]
