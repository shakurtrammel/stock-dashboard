from django.db import models


class Quote(models.Model):
    symbol = models.CharField(max_length=5)
    name = models.CharField(max_length=256)
    exchange = models.CharField(max_length=256)
    date = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=19, decimal_places=2, null=True)
    w52high = models.DecimalField(max_digits=19, decimal_places=2, null=True)
    w52low = models.DecimalField(max_digits=19, decimal_places=2, null=True)
    ytdchange = models.DecimalField(max_digits=19, decimal_places=2, null=True)
    marketcap = models.IntegerField(null=True)
    volume = models.IntegerField(null=True)
    peratio = models.DecimalField(max_digits=5, decimal_places=2, null=True)
    popen = models.DecimalField(max_digits=19, decimal_places=2, null=True)
    low = models.DecimalField(max_digits=19, decimal_places=2, null=True)
    high = models.DecimalField(max_digits=19, decimal_places=2, null=True)
    close = models.DecimalField(max_digits=19, decimal_places=2, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
