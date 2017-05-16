#!/bin/bash

# user sign-up curl script
# API reference: https://github.com/ga-wdi-boston/library-api-guide

curl "http://localhost:4741/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "jeffery@localize.com",
      "password": "sekret1",
      "password_confirmation": "sekret1"
    }
  }'
echo

# creates user object and returns it
