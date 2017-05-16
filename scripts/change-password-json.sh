#!/bin/bash

#curl "http://localhost:3000/change-password/${ID}" \


curl "http://localhost:7165/patch?id=${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data "{
    \"passwords\": {
      \"old\": \"${OLD}\",
      \"new\": \"${NEW}\"
    }
  }"
