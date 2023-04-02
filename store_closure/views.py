from django.shortcuts import render
# from ABM.data import erhc_values,erlc_values,lrhc_values,lrlc_values,spm_values,cspm_values,erhc_data,erlc_data,lrhc_data,lrlc_data,spm_data,cspm_data
# from ABM.agent import erhc,erlc,lrhc,lrlc,spm,cspm
# from ABM.main import ABM,erhc,erlc,lrhc,lrlc,cspm,spm
# from ABM.server import server
import os
from pathlib import Path
from ABM.run import runabm
from .models import Marketdata, Homedata
import pandas as pd


BASE_DIR = Path(__file__).resolve().parent.parent


# Create your views here.
from django.http import HttpResponse
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

def vue_test(request):
    return render(request, str(BASE_DIR)+'/store_closure/templates/vue-test.html')

# def vue_test(request):
#     return render(request, '/Users/sharyu/Documents/ICCLEProject/CapstoneProject/store_closure/templates/vue-test.html')
