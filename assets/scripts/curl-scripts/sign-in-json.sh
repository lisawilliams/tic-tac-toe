#!/bin/bash

# sign-in curl script
# API reference: https://github.com/ga-wdi-boston/game-project-api


  curl "http://tic-tac-toe.wdibos.com/sign-in" \
    --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
      "credentials": {
        "email": "lisa@lisa.com",
        "password": "333"
      }
    }'
  echo

  # this works and returns:
  # HTTP/1.1 200 OK
  # Server: nginx/1.4.6 (Ubuntu)
  # Date: Tue, 16 May 2017 16:09:34 GMT
  # Content-Type: application/json; charset=utf-8
  # Transfer-Encoding: chunked
  # Connection: keep-alive
  # X-Frame-Options: SAMEORIGIN
  # X-XSS-Protection: 1; mode=block
  # X-Content-Type-Options: nosniff
  # ETag: W/"7607704708cbd0585c64b7e27eb78f3d"
  # Cache-Control: max-age=0, private, must-revalidate
  # X-Request-Id: 42f52a32-93f8-4a55-9c52-55fb3ccd1fe1
  # X-Runtime: 0.091473
  # Vary: Origin
  #
  # {"user":{"id":43,"email":"heather@heatheradels.com","token":"BAhJIiVmODZhZWJmZDlkNTFmZWNmNGNkMmJjODQ2MjJjNTRmYQY6BkVG--8543063fdb09c458aff36c522f61602a6f5dcfeb"}}~/wdi/projects/tic-tac-toe (development)
