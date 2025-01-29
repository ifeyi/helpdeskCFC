from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html') # This line is the only one that is different from the previous snippet. It tells Django to render the index.html file when the user accesses the home page.

def login(request):
    return render(request, 'login.html') # This line tells Django to render the login.html file when the user accesses the login page.