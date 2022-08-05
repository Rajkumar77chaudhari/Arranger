from django.db import models


# Create your models here.


class Service(models.Model):
    name = models.CharField(max_length=100)
    owner = models.CharField(max_length=100)
    address = models.CharField(max_length=240)
    image = models.ImageField(upload_to='images')
    price = models.IntegerField()
    catagory = models.CharField(max_length=60)

    def __str__(self):
        return self.name


class User(models.Model):
    fullname = models.CharField(max_length=60)
    email = models.EmailField(max_length=100)
    address = models.CharField(max_length=240)
    phone_number = models.CharField(max_length=15, blank=True)
    password = models.CharField(max_length=20)
    image = models.ImageField(upload_to='images')
    service = models.ForeignKey(Service, on_delete=models.PROTECT, null=True)

    def __Str__(self):
        return self.fullname
