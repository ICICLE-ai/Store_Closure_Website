from django.shortcuts import render
# from ABM.data import erhc_values,erlc_values,lrhc_values,lrlc_values,spm_values,cspm_values,erhc_data,erlc_data,lrhc_data,lrlc_data,spm_data,cspm_data
# from ABM.agent import erhc,erlc,lrhc,lrlc,spm,cspm
# from ABM.main import ABM,erhc,erlc,lrhc,lrlc,cspm,spm
# from ABM.server import server
from ABM.run import runabm

# Create your views here.
from django.http import HttpResponse
def index(request):
    return HttpResponse("Hi, Please input your query here.")

def abm_view(request):
    if request.method=='POST' and 'run_abm' in request.POST:
        runabm()
    return render(request,"abm.html",{})