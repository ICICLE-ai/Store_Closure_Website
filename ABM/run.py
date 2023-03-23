import os
from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent
os.chdir(str(BASE_DIR)+"/ABM/") ##CHANGE THIS
#from .server import server
from .data import data_processing
from .main import ABM

import profile
def runabm(market_df,household_df):
    erhc_values,erlc_values,lrhc_values,lrlc_values,spm_values,cspm_values= data_processing(market_df,household_df)
    abm_steps = ABM(erhc_values,erlc_values,lrhc_values,lrlc_values,spm_values,cspm_values )
    for i in range(1):
        abm_steps.step()
    #print("running")
    #profile.run(server.launch())
