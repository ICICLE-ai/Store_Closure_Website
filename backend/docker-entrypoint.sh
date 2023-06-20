#!/bin/bash
echo "Checking for migrations"
MIGRATIONS=$(python manage.py showmigrations | grep '\[ \]')

if [ ! -z "$MIGRATIONS" ]; then
    echo "Migrations found, running migrate"
    python manage.py migrate --noinput;
else
    echo "No migrations found"
fi

echo "Collecting static files"
python manage.py collectstatic --noinput;

echo "Loading initial data"
python manage.py runscript load_initial_data;

echo "Starting server"
gunicorn --config gunicorn.conf.py CapstoneProject.wsgi:application
