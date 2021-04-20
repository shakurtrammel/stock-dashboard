from rest_framework import serializers
from .models import Quote


class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = (
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
