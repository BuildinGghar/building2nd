from django.shortcuts import render
from .models import *
from django.shortcuts import get_object_or_404, render
from . forms import *
# Create your views here.
def index(request):
    baners=Baner.objects.all()
    mobile_baner=BanerMobile.objects.all()
    project=Project.objects.all()
    offerimage=Offerbaner.objects.all()
    context={
        "baners":baners,
        "mobile_baner":mobile_baner,
        "project":project,
        'offerimage':offerimage,
    }
    return render(request, 'index.html',context)



def project_view(request, id):
    project = Project.objects.get(id=id)
    projects = [project]  # create a list containing the project object
    construction_images=ConstructionImage.objects.filter(project=project)  # get all construction images related to the project
    context = {
        'project': project,
        'construction_images': construction_images,
    }
    return render(request, 'project_view.html', context)

def design_image(request, id):
    project = get_object_or_404(Project, id=id)
    projects = [project]  # create a list containing the project object
    design_image=DesignImage.objects.filter(project=project)  # get all construction images related to the project
    context = {
        'project': project,
        'design_image': design_image,
    }
    print(projects)
    return render(request, 'design_image.html', context)




def architecture(request):
    baners=Baner.objects.all()
    mobile_baner=BanerMobile.objects.all()
    project=Project.objects.all()
    context={
        "baners":baners,
        "mobile_baner":mobile_baner,
        "project":project,
    }
    return render (request, 'architecture.html',context)

def construction(request):
    baners=Baner.objects.all()
    mobile_baner=BanerMobile.objects.all()
    project=Project.objects.all()
    context={
        "baners":baners,
        "mobile_baner":mobile_baner,
        "project":project,
    }
    return render (request, 'construction.html',context)

def packages(request):
    try:
        data = Package.objects.get(id=1)
        context = {'data': data}
    except Package.DoesNotExist:
        context = {}
    return render(request, 'turnkey-construction-packages.html',context)

def structure(request):
    try:
        data = Package.objects.get(id=2)
        context = {'data': data}
    except Package.DoesNotExist:
        context = {}
    return render(request, 'structure.html', context)

def kitchen(request):
    try:
        data = Package.objects.get(id=3)
        context = {'data': data}
    except Package.DoesNotExist:
        context = {}
    return render(request, 'kitchen.html', context)

def bathroom(request):
    try:
        data = Package.objects.get(id=4)
        context = {'data': data}
    except Package.DoesNotExist:
        context = {}
    return render(request, 'bathroom.html', context)


def woodwork(request):
    try:
        data = Package.objects.get(id=5)
        context = {'data': data}
    except Package.DoesNotExist:
        context = {}
    return render(request, 'woodwork.html', context)


def painting(request):
    try:
        data = Package.objects.get(id=6)
        context = {'data': data}
    except Package.DoesNotExist:
        context = {}
    return render(request, 'painting.html', context)

def flooring(request):
    try:
        data = Package.objects.get(id=7)
        context = {'data': data}
    except Package.DoesNotExist:
        context = {}
    return render(request, 'flooring.html', context)

def electrical(request):
    try:
        data = Package.objects.get(id=8)
        context = {'data': data}
    except Package.DoesNotExist:
        context = {}
    return render(request, 'electrical.html', context)


def watertanks(request):
    try:
        data = Package.objects.get(id=9)
        context = {'data': data}
    except Package.DoesNotExist:
        context = {}
    return render(request, 'watertanks.html', context)


def others(request):
    try:
        data = Package.objects.get(id=10)
        context = {'data': data}
    except Package.DoesNotExist:
        context = {}
    return render(request, 'others.html', context)

def exclusions(request):
    try:
        data = Package.objects.get(id=11)
        context = {'data': data}
    except Package.DoesNotExist:
        context = {}
    return render(request, 'exclusions.html', context)

def upgrades(request):
    try:
        data = Package.objects.get(id=12)
        context = {'data': data}
    except Package.DoesNotExist:
        context = {}
    return render(request, 'upgrades.html', context)


def warranty(request):
    try:
        data = Package.objects.get(id=13)
        context = {'data': data}
    except Package.DoesNotExist:
        context = {}
    return render(request, 'warranty.html', context)

def note(request):
    try:
        data = Package.objects.get(id=14)
        context = {'data': data}
    except Package.DoesNotExist:
        context = {}
    return render(request, 'note.html', context)



def architecture_portfolio(request):
    
    project=Project.objects.all()
    context={
        
        "project":project,
    }
    return render(request, 'architecture-portfolio.html',context)

def architecture_portfolio_view(request, id):
    project = Project.objects.get(id=id)
    projects = [project]  # create a list containing the project object
    construction_images=ConstructionImage.objects.filter(project=project)  # get all construction images related to the project
    context = {
        'project': project,
        'construction_images': construction_images,
    }
    return render(request, 'architecture-portfolio_view.html', context)


def construction_project(request):
    
    project=Project.objects.all()
    context={
        
        "project":project,
    }
    return render(request, 'construction_project.html',context)

def construction_project_view(request, id):
    project = Project.objects.get(id=id)
    projects = [project]  # create a list containing the project object
    construction_images=ConstructionImage.objects.filter(project=project)  # get all construction images related to the project
    context = {
        'project': project,
        'construction_images': construction_images,
    }
    return render(request, 'construction_project_view.html', context)

def architecture_portfolio_viewdesign_image(request, id):
    project = get_object_or_404(Project, id=id)
    projects = [project]  # create a list containing the project object
    design_image=DesignImage.objects.filter(project=project)  # get all construction images related to the project
    context = {
        'project': project,
        'design_image': design_image,
    }
    print(projects)
    return render(request, 'architecture-portfolio_view.html', context)


def about(request):
    return render(request,'aboutus.html')

def career(request):
    return render(request,'careers.html')



def contactus(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'success.html')  # Replace 'success.html' with your success page
    else:
        form = ContactForm()
    
    return render(request, 'contactus.html', {'form': form})






from django.shortcuts import render

from django.conf import settings
from django.shortcuts import redirect
 
 
def error_404_view(request, exception):
   
    # we add the path to the 404.html file
    # here. The name of our HTML file is 404.html
    return render(request, '404error.html')

from django.http import JsonResponse

from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse

@csrf_exempt
def calculator(request):
    result = None
    if request.method == 'POST':
        expression = request.POST['expression']
        try:
            result = eval(expression)
        except:
            result = "Invalid expression"

    return render(request, 'index.html', {'result': result})

