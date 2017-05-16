#!/bin/bash

# sign-in curl script
# API reference: https://github.com/ga-wdi-boston/game-project-api


  curl "http://ttt.wdibos.com/sign-in" \
    --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
      "credentials": {
        "email": "heather@heatheradels.com",
        "password": "bunnymuffin"
      }
    }'
  echo

  # returns user object
