#!/bin/bash

# curl "http://localhost:3000/sign-out/$ID" \

curl "http://tic-tac-toe.wdibos.com/sign-in" \
  --include \
  --request DELETE

# data output from curl doesn't have a trailing newline
echo
