from django.shortcuts import HttpResponse, redirect, render
from rest_framework import viewsets
from .serializers import QuoteSerializer
import requests
from .models import Quote
from django.views.decorators.csrf import ensure_csrf_cookie


class QuoteView(viewsets.ModelViewSet):
    serializer_class = QuoteSerializer
    queryset = Quote.objects.all()


def home(request):
    return redirect('http://localhost:3000')
    

@ensure_csrf_cookie
def quote(request):
    symbol = request.POST['search']
    response = requests.get(f'https://cloud.iexapis.com/stable/stock/{symbol}/quote?token=pk_84a9cc62c48745ee8c931af085b08166')
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
