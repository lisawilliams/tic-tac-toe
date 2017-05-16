#!/bin/bash

# sign-in curl script
# API reference: https://github.com/ga-wdi-boston/library-api-guide


  curl "http://localhost:4741/sign-in" \
    --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
      "credentials": {
        "email": "jeffery@localize.com",
        "password": "sekret1"
      }
    }'
  echo

  # returns user object
