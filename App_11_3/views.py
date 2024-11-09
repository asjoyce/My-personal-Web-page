# App_11_3/views.py
# views.py
from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def resume(request):
    return render(request, 'resume.html')

def projects(request):
    return render(request, 'projects.html')