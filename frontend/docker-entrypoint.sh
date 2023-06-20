#!/bin/bash
# Replace env variables in nginx.conf
# envsubst < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# Create .env file for Vue
sh create_env_file.sh

# Start nginx
nginx -g "daemon off;"