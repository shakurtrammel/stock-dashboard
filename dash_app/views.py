from django.shortcuts import HttpResponse, redirect, render
from django.contrib import messages
from .models import User, Quote
from .serializers import QuoteSerializer
from rest_framework import viewsets
from django.views.decorators.csrf import ensure_csrf_cookie
import requests
import bcrypt



# Registration & Login Controllers
def register(request):
    errors = User.objects.registration_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect("/")
    else:
        user = list(User.objects.filter(email=request.POST["email"]))
        if len(user) == 0:
            password_hash = bcrypt.hashpw(request.POST['rpassword'].encode(), bcrypt.gensalt()).decode()
            User.objects.create(
                fname=request.POST['fname'],
                lname=request.POST['lname'],
                email=request.POST['email'],
                password=password_hash,
            )
            return redirect("/dashboard")
        else:
            return redirect("/")


def login(request):
    errors = User.objects.login_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect("/")
    else: 
        user = list(User.objects.filter(email=request.POST["lemail"]))
        if len(user) == 0:
            return HttpResponse("Email address not found. Please register to use app!")
        else:
            if user:
                logged_user = user[0]
                if bcrypt.checkpw(request.POST["lpassword"].encode(), logged_user.password.encode()):
                    request.session["userid"] = logged_user.id
                    return redirect("/dashboard")

def logout(request):
    request.session.flush()
    return redirect("/")



# Login Page View
def index(request):
    return render(request, 'index.html')


# Dashboard Page View
def dashboard(request):
    return redirect('http://localhost:3000')
    

@ensure_csrf_cookie
def quote(request):
    symbol = request.POST['search']
    response = requests.get(f'https://sandbox.iexapis.com/stable/stock/{symbol}/quote?token=Tpk_ea99ae74f7a645549cb3d3a38ac1007a')
    data = response.json()
    update = Quote.objects.get(id=1)
    update.symbol = data['symbol']
    update.name = data['companyName']
    update.exchange = data['primaryExchange']
    update.date = data['latestTime']
    update.price = data['latestPrice']
    update.w52high = data['week52High']
    update.w52low = data['week52Low']
    update.ytdchange = data['ytdChange']
    update.marketcap = data['marketCap']
    update.volume = data['latestVolume']
    update.peratio = data['peRatio']
    update.popen = data['open']
    update.low = data['low']
    update.high = data['high']
    update.close = data['close']
    update.save()
    return redirect('http://localhost:3000')


# Backend API Viewsets
class QuoteView(viewsets.ModelViewSet):
    serializer_class = QuoteSerializer
    queryset = Quote.objects.all()
