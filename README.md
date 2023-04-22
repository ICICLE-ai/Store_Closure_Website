# Store_Closure_Website
### Timeline and progress

- **02/19/2023**
    * Basic django structure (Sharyu)
    * User, Query, QueryStatus models (Sharyu)

- **02/20/2023**

    ```pip install django-extensions```
    * Homedata, Marketdata models (Harsh)
    * Added datafiles in data_files folder (Harsh)
    * Loaded initial data to database (Harsh)
        +  ```python manage.py runscript load_initial_data```

- **03/06/2023**
    
    * Added the Agent Based Model to the backend (Harsh)
    * Please download the following file and add it to ``` ./ABM/data/ ```
    ```
    https://drive.google.com/file/d/1ev2gF3WzQQiEIYtGiQIuQsX5hln0MOSp/view?usp=sharing
    ```
    * Go to ```http://127.0.0.1:8000/abm/``` to run ABM

- **03/07/2023**
    * Added a requirements.txt  ```pip install -r requirements.txt``` (Harsh)
    * Added Dockerfile and docker-compose file (Harsh)

- **03/19/2023**
    * create a new folder named "static/" at location project root (Sharyu)

- **03/20/2023**
    * Updated Models for Market Data (Harsh)
    * Updated ABM, so that it takes data from database (Harsh)

- **03/23/2023**
    * Updated Models for Household data (Harsh)
    * Fixed the path recognition problem (Harsh) 

- **04/02/2023**
    * Created a Basic frontend to input a query(Sharyu)
    
- **04/02/2023**
    * Added a Map to the frontend (Sharyu)
    * Also marked homedata on the map (Sharyu)

- **04/22/2023**
    * Updated Cors policy (Harsh)
