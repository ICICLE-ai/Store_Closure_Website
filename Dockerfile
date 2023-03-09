FROM python:3.9.12

ENV PYTHONUNBUFFERED=1

WORKDIR /code

ADD . /code

COPY ./requirements.txt ./code/requirements.txt

RUN apt update && apt install -y libgdal-dev libspatialindex-dev

RUN pip install -r requirements.txt

COPY . /code

CMD cd code