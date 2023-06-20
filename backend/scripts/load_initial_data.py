import pandas as pd
from store_closure.models import Homedata,Marketdata

def run():
    homedata_csv = pd.read_csv('data_files/homedata.csv')
    Homedata.objects.all().delete() #deletes all previous data, we need to run this script only once, 
                                    #but I since I am running it again and again while writing it I have added this line
    row_iter = homedata_csv.iterrows()
    objs_homedata = [
        Homedata(
            longitude = row['longitude'],
            latitude = row['latitude'],
            hhinc8 = row['hhinc8'],
            owncar = row['owncar'],
            category = row['category'],
            salary = row['salary']
        )
        for index,row in row_iter
    ]
    Homedata.objects.bulk_create(objs_homedata)

    marketdata_csv = pd.read_csv('data_files/marketdata.csv')
    Marketdata.objects.all().delete()
    row_iter_market = marketdata_csv.iterrows()
    objs_marketdata = [
        Marketdata(
            longitude = row['longitude'],
            latitude = row['latitude'],
            category = row['category'],
            FSA = row['FSA']
        )
        for index,row in row_iter_market
    ]
    Marketdata.objects.bulk_create(objs_marketdata)