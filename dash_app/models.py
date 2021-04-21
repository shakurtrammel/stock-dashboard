from django.db import models
import re
import bcrypt



class UserManager(models.Manager):
    def registration_validator(self, data):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if (len(data["fname"]) < 2) or (not data["fname"].isalpha()):
            errors["fname"] = "First Name should be at least 2 characters and contain only letters."
        if (len(data["lname"]) < 2) or (not data["lname"].isalpha()):
            errors["lname"] = "Last Name should be at least 2 characters and contain only letters."
        if not EMAIL_REGEX.match(data["email"]):             
            errors["email"] = "Invalid email address."
        if len(data["rpassword"]) < 8:
            errors["rpassword"] = "Password should be at least 8 characters."
        elif data["conf_pass"] != data["rpassword"]:
            errors["conf_pass"] = "Passwords do not match."
        return errors

    def login_validator(self, data):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(data["lemail"]):             
            errors["lemail"] = "Invalid email address."
        else:
            if len(data["lpassword"]) == 0:
                errors["lpassword"] = "Password is required."
            elif len(data["lpassword"]) < 8:
                errors["lpassword"] = "Password should be at least 8 characters."
        return errors


class QuoteManager(models.Manager):
    def wish_validator(self, data):
        errors = {}
        if len(data["search"]) == 0:
            errors["search"] = "A stock symbol must be provided."
        elif len(data["search"]) < 3:
            errors["search"] = "A stock symbol must consist of at least 1 character."
        return errors


class User(models.Model):
    fname = models.CharField(max_length=255)
    lname = models.CharField(max_length=255, null=True)
    email = models.CharField(max_length=255, null=True)
    password = models.CharField(max_length=255, null=True)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now_add=True)
    objects = UserManager()


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
    objects = QuoteManager()
