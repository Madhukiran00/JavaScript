from django.db import models

# Create your models here.

class Students(models.Model):
    name=models.CharField(max_length=20)
    age=models.IntegerField()
    
    

class table1(models.Model):
    id=models.IntegerField(primary_key=True)
    name=models.CharField(max_length=10)
    age=models.IntegerField()
    
    
    
class table2(models.Model):
    name2=models.CharField(max_length=40)
    age2=models.IntegerField()
    
    
class table3(models.Model):
    name3=models.CharField(max_length=30)
    age3=models.IntegerField()
    
class table4(models.Model):
    name4=models.CharField(max_length=80)
    age4=models.IntegerField()
    
    