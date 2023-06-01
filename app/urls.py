
from django.urls import path
from . import views

from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', views.index, name='index'),
    path('project_view/<int:id>/', views.project_view, name='project_view'),
    path('design_image/<int:id>/', views.design_image, name='design_image'),
    path('architecture', views.architecture, name='architecture'),
    path('construction', views.construction, name='construction'),
    path('packages', views.packages, name='packages'),
    path('structure', views.structure, name='structure'),
    path('kitchen', views.kitchen, name='kitchen'),
    path('bathroom', views.bathroom, name='bathroom'),
    path('woodwork', views.woodwork, name='woodwork'),
    path('painting', views.painting, name='painting'),
    path('flooring', views.flooring, name='flooring'),
    path('electrical', views.electrical, name='electrical'),
    path('watertanks', views.watertanks, name='watertanks'),
    path('others', views.others, name='others'),
    path('exclusions', views.exclusions, name='exclusions'),
    path('upgrades', views.upgrades, name='upgrades'),
    path('warranty', views.warranty, name='warranty'),
    path('note', views.note, name='note'),
    path('architecture_portfolio', views.architecture_portfolio, name='architecture_portfolio'),
    path('architecture_portfolio_view/<int:id>/', views.architecture_portfolio_view, name='architecture_portfolio_view'),
    path('construction_project', views.construction_project, name='construction_project'),
    path('construction_project_view/<int:id>/', views.construction_project_view, name='construction_project_view'),
    path('architecture_portfolio_viewdesign_image/<int:id>/', views.architecture_portfolio_viewdesign_image, name='architecture_portfolio_viewdesign_image'),
    path('about',views.about, name='about'),
    path('career',views.career, name='career'),
    path('contactus',views.contactus, name='contactus'),
    path('calculator/',views.calculator, name='calculator'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)




