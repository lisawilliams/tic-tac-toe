#!/bin/bash

# curl "http://tic-tac-toe.wdibos.com/sign-out/:$ID" \

API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/sign-out"
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=BAhJIiViZjE4NjcxNWIyYmUxMTBhNWU4YjE3NDMxZmRmMWQzNQY6BkVG--4f1386d9aaf28c219f9675cc671bf0a204430fdb"


Nonworking curl request, terminal hangs:

curl --include --request DELETE "http://tic-tac-toe.wdibos.com/sign-out/77" \
  --header "Authorization: Token token="BAhJIiViZjE4NjcxNWIyYmUxMTBhNWU4YjE3NDMxZmRmMWQzNQY6BkVG--4f1386d9aaf28c219f9675cc671bf0a204430fdb"

#
Old curl request, returns 404:

curl "http://tic-tac-toe.wdibos.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "id": 77,
      "email": "lisa@lisa.com",
      "password": "333",
      "token":"BAhJIiViZjE4NjcxNWIyYmUxMTBhNWU4YjE3NDMxZmRmMWQzNQY6BkVG--4f1386d9aaf28c219f9675cc671bf0a204430fdb"
    }
  }'

# Let's try another curl request:

#!/bin/bash

# curl "http://tic-tac-toe.wdibos.com/sign-out/:$ID" \

API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/sign-out"
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=BAhJIiViZjE4NjcxNWIyYmUxMTBhNWU4YjE3NDMxZmRmMWQzNQY6BkVG--4f1386d9aaf28c219f9675cc671bf0a204430fdb"


data output from curl doesn't have a trailing newline
echo
