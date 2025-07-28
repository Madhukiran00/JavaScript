from django.shortcuts import render
from django.http import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt

from . models import Students
# Create your views here.

def sample(req):
    return HttpResponse("something")


user_data=[]
@csrf_exempt
def post_data(req):
    data=json.loads(req.body)
    user_data.append(data)
    print(data)
    
    return HttpResponse("DataPosted")
    
    
    
    
def get_users(req):
    all_users=Students.objects.all()
    for i in all_users:
        print(i.name)
    return HttpResponse("gettting all usera")
    