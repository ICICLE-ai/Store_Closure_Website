# FROM python:3.9 as build-backend-stage

# RUN apt update
# RUN apt install -y libgdal-dev \
#     libspatialindex-dev

# WORKDIR /app
# RUN python -m venv .venv

# COPY ./backend/requirements.txt .
# RUN .venv/bin/pip install --quiet -r requirements.txt
# RUN .venv/bin/pip install --quiet django-cors-headers \
#     gunicorn \
#     uvicorn

# FROM node:lts-bullseye as build-frontend-stage
# WORKDIR /app
# COPY ./frontend/ .

# RUN npm --force install
# RUN npm run build

# FROM nginx:stable-bullseye as production-stage
# ENV PYTHONUNBUFFERED=1 \
#     SECRET_KEY=./SECRET.key

# COPY nginx.conf /etc/nginx/nginx.conf

# WORKDIR /app
# RUN mkdir static
# COPY --from=build-backend-stage /app/.venv .venv
# COPY --from=build-frontend-stage /app/static ./static
# COPY ./backend .
# COPY favicon.ico ./static/src/vue/dist/favicon.ico
# COPY ./docker-entrypoint.sh .

# ENTRYPOINT "./docker-entrypoint.sh"





