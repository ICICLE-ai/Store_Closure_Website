from datetime import datetime
from django.shortcuts import render
# from ABM.data import erhc_values,erlc_values,lrhc_values,lrlc_values,spm_values,cspm_values,erhc_data,erlc_data,lrhc_data,lrlc_data,spm_data,cspm_data
# from ABM.agent import erhc,erlc,lrhc,lrlc,spm,cspm
# from ABM.main import ABM,erhc,erlc,lrhc,lrlc,cspm,spm
# from ABM.server import server
import os
from pathlib import Path
from ABM.run import runabm
from .models import Marketdata, Homedata, Query, User
import pandas as pd
import json
from django.http import JsonResponse

BASE_DIR = Path(__file__).resolve().parent.parent


# Create your views here.
from django.http import HttpResponse, JsonResponse
def index(request):
    return HttpResponse("Hi, Please input your query here.")

def abm_view(request):
    if request.method=='POST' and 'run_abm' in request.POST:
        market_item = Marketdata.objects.all().values()
        market_df = pd.DataFrame(market_item)
        household_item = Homedata.objects.all().values()
        household_df = pd.DataFrame(household_item)

        #print(df)
        runabm(market_df,household_df)
    return render(request,"abm.html",{})

def homedata_location_list(request):
    locations = Homedata.objects.all()
    data = [{'latitude': location.latitude, 'longitude': location.longitude, 'category': location.category} for location in locations]
    return JsonResponse(data, safe=False)

def marketdata_location_list(request):
    locations = Marketdata.objects.all()
    data = [{'latitude': location.latitude, 'longitude': location.longitude, 'category': location.category} for location in locations]

    return JsonResponse(data, safe=False)

def vue_test(request):
    return render(request, str(BASE_DIR)+'/store_closure/templates/vue-test.html')

def submit_form(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        # print(data)
        # print(data.get('firstName'))
        user = User(
            first_name=data['firstName'],
            last_name=data['lastName'],
            email=data['emailAddress']
        )
        user.save()
        # create a new Query object
        query = Query(
            query_text=data['queryText'],
            query_date= datetime.now(),
            query_user=user
        )
        query.save()
        # process the data
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method'})