from datetime import datetime
from django.shortcuts import render
import os
from pathlib import Path
from ABM.run import runabm
from ABM.analysis import analysis
from .models import Marketdata, Homedata, Query, User
import pandas as pd
import json
import requests
from django.http import JsonResponse

BASE_DIR = Path(__file__).resolve().parent.parent

# Create your views here.

def homedata_location_list(request):
    locations = Homedata.objects.all()
    data = [{'latitude': location.latitude, 'longitude': location.longitude, 'category': location.category} for location in locations]
    response = JsonResponse(data, safe=False)
    return response

def marketdata_location_list(request):
    locations = Marketdata.objects.all()
    data = [{'latitude': location.latitude, 'longitude': location.longitude, 'category': location.category} for location in locations]
    response = JsonResponse(data, safe=False)
    return response

def submit_form(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        data['queryText'] = '_'.join(data['queryText'].split(' '))

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
        try:
            # Send the query to the AI
            response = requests.get(f"{os.environ['AI_URL']}/query?q={query.query_text}", timeout=(1000,1000))
            # print(response.json())
            token = data['emailAddress'] # Use email for now, replace with session token later

            # Select the first response
            # best_command = response.json()[0]['cmd']
            best_command = response[0]['cmd']
            # Get the markers from the database
            market_item = Marketdata.objects.all().values()
            market_df = pd.DataFrame(market_item)
            household_item = Homedata.objects.all().values()
            household_df = pd.DataFrame(household_item)

            # Analyze the data and run the agents
            runabm(market_df, household_df, best_command, token, query.query_text)

            return JsonResponse({'success': True, 'file_name': f"{token}.zip"})
        except Exception as e:
            print(e)
            return JsonResponse({'success': False, 'error': str(e)})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method'})

def ping(request):
    return JsonResponse({'success': True})

def delete_file(request):
    if request.method == 'POST':
        file_name = json.loads(request.body)['file_name']
        print(file_name)
        try:
            os.remove(os.path.join(BASE_DIR, 'results', file_name))
            return JsonResponse({'success': True})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method'})