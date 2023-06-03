from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Baner)
admin.site.register(BanerMobile)


class ConstructionImageInline(admin.TabularInline):
    model = ConstructionImage
    extra = 1

class DesignImageInline(admin.TabularInline):
    model = DesignImage
    extra = 1

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('project_id', 'location', 'client_name', 'area', 'floor', 'package', 'status')
    search_fields = ('project_id', 'location', 'client_name')
    inlines = [
        ConstructionImageInline,
        DesignImageInline,
    ]
    
admin.site.register(Package)

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'mobile', 'email', 'location')
    search_fields = ('name', 'email', 'location')
    list_filter = ('location',)
    list_per_page = 20
    

@admin.register(Offerbaner)
class OfferbanerAdmin(admin.ModelAdmin):
    list_display = ['id', 'image']
    list_display_links = ['id', 'image']   
    
admin.site.register(Youtuble)