import os, sys
from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent
os.chdir(str(BASE_DIR)+"/ABM/") ##CHANGE THIS
#from .server import server
from .data import data_processing
from .main import ABM
from .analysis import analysis

import profile
def runabm(market_df, household_df, best_command,token:str, query:str):
    erhc_values,erlc_values,lrhc_values,lrlc_values,spm_values,cspm_values= data_processing(market_df,household_df,best_command)
    abm_steps = ABM(erhc_values,erlc_values,lrhc_values,lrlc_values,spm_values,cspm_values)

    # direct standard output to a file
    sys.stdout = open(f'/app/results/{token}_output.txt', 'w')
    for i in range(2):
        q = abm_steps.step()
    sys.stdout.close()
    # restore standard output
    sys.stdout = sys.__stdout__

    analysis(q, query, token)
    #print("running")
    #profile.run(server.launch())
