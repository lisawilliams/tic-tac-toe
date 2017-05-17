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
