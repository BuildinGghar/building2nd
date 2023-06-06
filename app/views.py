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
    youtubeurl=Youtuble.objects.all()
    package_one=PackageName.objects.get(id=1)
    package_two=PackageName.objects.get(id=2)
    package_three=PackageName.objects.get(id=3)
    package_four=PackageName.objects.get(id=4)
    floor_addition=PackageName.objects.get(id=5)
    context={
        "baners":baners,
        "mobile_baner":mobile_baner,
        "project":project,
        'offerimage':offerimage,
        'youtubeurl':youtubeurl,
        'package_one':package_one,
        'package_two':package_two,
        'package_three':package_three,
        'package_four':package_four,
        'floor_addition':floor_addition,
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




# def architecture(request):
#     baners=Baner.objects.all()
#     mobile_baner=BanerMobile.objects.all()
#     project=Project.objects.all()
#     context={
#         "baners":baners,
#         "mobile_baner":mobile_baner,
#         "project":project,
#     }
#     return render (request, 'architecture.html',context)

# def construction(request):
#     baners=Baner.objects.all()
#     mobile_baner=BanerMobile.objects.all()
#     project=Project.objects.all()
#     context={
#         "baners":baners,
#         "mobile_baner":mobile_baner,
#         "project":project,
#     }
#     return render (request, 'construction.html',context)


def house_villa(request):
    return render(request, 'housevilla.html')

def custom_project(request):
    return render(request, 'custom_project.html')

def renovation(request):
    return render(request, 'renovation.html')

def floor_addition(request):
    return render(request, 'floor_addition.html')

def packages(request):
    package_one=PackageName.objects.get(id=1)
    package_two=PackageName.objects.get(id=2)
    package_three=PackageName.objects.get(id=3)
    package_four=PackageName.objects.get(id=4)
    floor_addition=PackageName.objects.get(id=5)
    context={
        'package_one':package_one,
        'package_two':package_two,
        'package_three':package_three,
        'package_four':package_four,
        'floor_addition':floor_addition,
    }
    return render(request, 'package.html',context)

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
from django.core.mail import send_mail
from django.conf import settings
from django.shortcuts import render
from .forms import ContactForm

from django.core.mail import send_mail
from django.conf import settings
from django.shortcuts import render
from .forms import ContactForm

def contactus(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()

            name = form.cleaned_data.get('name')
            mobile = form.cleaned_data.get('mobile')
            email = form.cleaned_data.get('email')
            location = form.cleaned_data.get('location')
            message = form.cleaned_data.get('message')

            # Do something with the form data
            # For example, save it to a database or perform any other desired actions

            return render(request, 'success.html')  # Replace 'success.html' with your success page
        else:
            print(form.errors)  # Print form errors for debugging
    else:
        form = ContactForm()
    return render(request, 'contactus.html', {'form': form})


def popup(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('success')  # Replace 'success' with your success URL name
    else:
        form = ContactForm()
    return render(request, 'popup.html', {'form': form})

# with mail

# def contactus(request):
#     if request.method == 'POST':
#         form = ContactForm(request.POST)
#         if form.is_valid():
#             form.save()
            
#             name = form.cleaned_data.get('name')
#             mobile = form.cleaned_data.get('mobile')
#             email = form.cleaned_data.get('email')
#             location = form.cleaned_data.get('location')
#             message = form.cleaned_data.get('message')
            
#             subject = 'Contact Form Submission'
#             message = f'Name: {name}\nMobile: {mobile}\nEmail: {email}\nLocation: {location}\nMessage: {message}'
#             from_email = settings.EMAIL_HOST_USER
#             to_email = ['krishna@buildingghar.com']  # Set the recipient email address here
            
#             send_mail(subject, message, from_email, to_email, fail_silently=False)
            
#             # Send thank-you message to the user
#             user_subject = 'Thank You for Contacting Us'
#             user_message = f'Dear {name},\n\nThank you for reaching out to us. We appreciate your message and will get back to you shortly.\n\nBest Regards,\nBuildingGhar\nbuildingghar.com\nAddress. # 456, 4th Floor, 7th Cross, BTM Layout\nStage 2. Bengaluru - 560076 Landmark Opposite\nMarigold Hospital '
#             send_mail(user_subject, user_message, from_email, [email], fail_silently=False)
            
#             return render(request, 'success.html')  # Replace 'success.html' with your success page
#         else:
#             print(form.errors)  # Print form errors for debugging
#     else:
#         form = ContactForm()
#     return render(request, 'contactus.html', {'form': form})



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

from django.shortcuts import get_object_or_404, render

def package_details_view(request, id):
    package = get_object_or_404(PackageDetails, id=id)
    context = {
        'package': package
    }
    return render(request, 'package_view.html', context)

