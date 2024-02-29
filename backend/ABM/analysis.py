import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import warnings
from zipfile import ZipFile

# from data import household
import os
from pathlib import Path

def compress_files(query:str, token:str) -> None:
    # Add query to the output file
    with open(f'/app/results/{token}_query.txt', 'w') as f:
        f.write(f"Query: {query}\n")

    # Zip the pdf and txt files        
    with ZipFile(f"/app/results/{token}.zip", "w") as zipObj:
        zipObj.write(f"/app/results/{token}_graphs.pdf", f"graphs.pdf")
        zipObj.write(f"/app/results/{token}_output.txt", f"output.txt")
        zipObj.write(f"/app/results/{token}_query.txt", f"query.txt")

    # Remove the pdf and txt files
    os.remove(f"/app/results/{token}_graphs.pdf")
    os.remove(f"/app/results/{token}_output.txt")

def analysis(q, query:str, token: str) -> None:
    BASE_DIR = Path(__file__).resolve().parent.parent
    os.chdir(str(BASE_DIR) + "/ABM/")
    warnings.filterwarnings("ignore")

    df = q
    df = df.drop(df.columns[[0]], axis=1)  # DROPPING THE UNNAMED COLUMN
    df_old = pd.read_csv("data_old.csv")
    df_old = df_old.drop(df_old.columns[[0]], axis=1)

    household_orignal = pd.read_csv("homedata.csv")
    n_erhc_orignal = 0
    n_erlc_orignal = 0
    n_lrhc_orignal = 0
    n_lrlc_orignal = 0
    for i in range(len(household_orignal)):
        if household_orignal.loc[i, "category"] == "ERHC":
            n_erhc_orignal += 1
        elif household_orignal.loc[i, "category"] == "ERLC":
            n_erlc_orignal += 1
        elif household_orignal.loc[i, "category"] == "LRHC":
            n_lrhc_orignal += 1
        elif household_orignal.loc[i, "category"] == "LRLC":
            n_lrlc_orignal += 1

    # Calculate the number of households in each category
    households = dict()
    if "ERHC_FA" in df:
        households['ERHC'] = {
            'new': df['ERHC_FA'].to_numpy(),
            'old': df_old['ERHC_FA'].to_numpy()
        }
        for i in range(1, len(df)):
            households['ERHC']['new'][i] = df["ERHC_FA"][i] + df["ERHC_FA"][i - 1]
        for i in range(1, len(df_old)):
            households['ERHC']['old'][i] = df_old["ERHC_FA"][i] + df_old["ERHC_FA"][i - 1]
            
    if "ERLC_FA" in df:
        households['ERLC'] = {
            'new': df['ERLC_FA'].to_numpy(),
            'old': df_old['ERLC_FA'].to_numpy()
        }
        for i in range(1, len(df)):
            households['ERLC']['new'][i] = df["ERLC_FA"][i] + df["ERLC_FA"][i - 1]
        for i in range(1, len(df_old)):
            households['ERLC']['old'][i] = df_old["ERLC_FA"][i] + df_old["ERLC_FA"][i - 1]

    if "LRHC_FA" in df:
        households['LRHC'] = {
            'new': df['LRHC_FA'].to_numpy(),
            'old': df_old['LRHC_FA'].to_numpy()
        }
        for i in range(1, len(df)):
            households['LRHC']['new'][i] = df["LRHC_FA"][i] + df["LRHC_FA"][i - 1]
        for i in range(1, len(df_old)):
            households['LRHC']['old'][i] = df_old["LRHC_FA"][i] + df_old["LRHC_FA"][i - 1]

    if "LRLC_FA" in df:
        households['LRLC'] = {
            'new': df['LRLC_FA'].to_numpy(),
            'old': df_old['LRLC_FA'].to_numpy()
        }
        for i in range(1, len(df)):
            households['LRLC']['new'][i] = df["LRLC_FA"][i] + df["LRLC_FA"][i - 1]
        for i in range(1, len(df_old)):
            households['LRLC']['old'][i] = df_old["LRLC_FA"][i] + df_old["LRLC_FA"][i - 1]
    
    fig, axs = plt.subplots(nrows=len(households)+1, ncols=1, figsize=(20, 40))
    # plt.suptitle(f"Household Distribution for {query} query", fontsize=20)

    # Create a bar chart for the total number of households
    new = np.array([np.round(households[key]['new'][-1],0) for key in households.keys()])
    old = np.array([np.round(households[key]['old'][-1],0) for key in households.keys()])

    labels = list(households.keys())
    x = np.arange(0,len(labels))

    width = 0.35

    # Create the bars
    rects1 = axs[0].bar(x - width / 2, new, width, color="orange", label="new")
    rects2 = axs[0].bar(x + width / 2, old, width, color="blue", label="orignal")

    axs[0].set_title("Changes after modification")
    axs[0].set_xticks(x, labels)
    axs[0].legend()
    axs[0].bar_label(rects1, padding=3)
    axs[0].bar_label(rects2, padding=3)


    # Add a column for the number of steps
    df["steps"] = np.arange(1, len(df) + 1)
    df_old["steps"] = np.arange(1, len(df_old) + 1)

    # Create a plot for each household
    for i, household in enumerate(households):
        axs[i+1].set_xticks(df['steps'])
        axs[i+1].plot(households[household]['new'], label=f"{household} After Modification")
        axs[i+1].plot(households[household]['old'], label=f"{household} Before Modification")
        axs[i+1].set_title(f"{household}")
        axs[i+1].legend()

    fig.tight_layout()
    # Save the plots to a pdf
    plt.savefig(fname=f"/app/results/{token}_graphs.pdf", bbox_inches="tight", format="pdf")

    compress_files(query, token)