#!/bin/bash

# user sign-up curl script
# API reference: https://github.com/ga-wdi-boston/library-api-guide

curl "http://tic-tac-toe.wdibos.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "heather@heatheradels.com",
      "password": "bunnymuffin",
      "password_confirmation": "bunnymuffin"
    }
  }'
echo

# creates user object and returns it
# This curl script runs in node and creates a user object
# this user has a user number of 43
# note token:  Note token for this user:
# {"user":{"id":43,"email":"heather@heatheradels.com","token":"BAhJIiU5NGM0MzU0MzMwYWQ1MWY5MTNhNWU0ZjdjNzVhY2NmOAY6BkVG--72eb17711e591f6bfd6c5d27382db9f633501e91"}}~/wdi/projects/tic-tac-toe (master)
