from django.db import models

# {% csrf_token %}

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=200) 
    last_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    def __str__(self):
        return self.first_name + " " + self.last_name
  
class Query(models.Model):
    query_text = models.TextField()
    query_user = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.query_text

class QueryStatus(models.Model):
    STATUS_CHOICES = (
    ("In Progress", "Query is in Progress"),
    ("Processed", "Query is Processed"),
)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='InProgress')
    query = models.ForeignKey(Query, on_delete=models.CASCADE)


class Homedata(models.Model):
    longitude = models.FloatField()
    latitude = models.FloatField()
    hhinc8 = models.IntegerField()
    owncar = models.IntegerField()
    category = models.CharField(max_length=4)
    salary = models.IntegerField()

class Marketdata(models.Model):
    longitude = models.FloatField()
    latitude = models.FloatField()
    category = models.CharField(max_length=4)
    FSA = models.IntegerField()