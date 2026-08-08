from django.contrib import admin
from . import models


class BoutiqueAdminAre(admin.AdminSite):
    site_header = "Aakriti Boutique"
    
boutique_site = BoutiqueAdminAre(name='Boutiqueadmin')

admin.site.register(models.Collection)
boutique_site.register(models.Collection)