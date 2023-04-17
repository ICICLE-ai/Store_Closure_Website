FROM python:3.9-slim
ENV PYTHONUNBUFFERED=1

WORKDIR /app
COPY ./ /app
RUN apt update > /dev/null
RUN apt install -y libgdal-dev libspatialindex-dev nodejs npm > /dev/null

WORKDIR /app/frontend
RUN npm --force install
RUN npm run build

WORKDIR /app
RUN pip install --quiet -r  requirements.txt
RUN pip install --quiet django-cors-headers
RUN python -m pip install uvicorn gunicorn