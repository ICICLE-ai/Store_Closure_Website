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
    * create a new folder named "static/" at location project root 
