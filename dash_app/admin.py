from django.contrib import admin
from .models import Quote, User


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

class UserAdmin(admin.ModelAdmin):
    user_display = (
        'fname',
        'lname',
        'email',
        'password',
    )

# Registering the models here.

admin.site.register(Quote, QuoteAdmin)
admin.site.register(User, UserAdmin)
