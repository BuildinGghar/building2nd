from django.db import models
from ckeditor.fields import RichTextField
# Create your models here.
class Baner(models.Model):
    image=models.ImageField(upload_to='images/baner')
    
class BanerMobile(models.Model):
    image=models.ImageField(upload_to='images/baner')
    
    

class Project(models.Model):
    feature_image=models.ImageField(upload_to='images/project')
    project_id=models.CharField(max_length=50)
    location=models.CharField(max_length=50)
    client_name=models.CharField(max_length=50)
    area=models.CharField(max_length=50)
    floor=models.CharField(max_length=50)
    package=models.CharField(max_length=50)
    status=models.CharField(max_length=50)
    
    
class ConstructionImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    image=models.ImageField(upload_to='images/ProjectImage')
    
    
class DesignImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    image=models.ImageField(upload_to='images/ProjectImage')
    
class Package(models.Model):
    Package=RichTextField()
    
    from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=100)
    mobile = models.CharField(max_length=20)
    email = models.EmailField()
    location = models.CharField(max_length=100)
    message = models.TextField()

    def __str__(self):
        return self.name
    
    
    
class Offerbaner(models.Model):
    image=models.ImageField(upload_to='images/Offer Baner')
    