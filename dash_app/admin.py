from django.contrib import admin
from .models import Quote


class QuoteAdmin(admin.ModelAdmin):
    quote_display = (
        'id',
        'symbol',
        'name',
        'exchange',
        'date',
        'price',
        'w52high',
        'w52low',
        'ytdchange',
        'marketcap',
        'volume',
        'peratio',
        'popen',
        'low',
        'high',
        'close',
    )

# Registering the models here.

admin.site.register(Quote, QuoteAdmin)
