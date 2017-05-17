curl "http://tic-tac-toe.wdibos.com/change-password/77" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Token token=BAhJIiViZjE4NjcxNWIyYmUxMTBhNWU4YjE3NDMxZmRmMWQzNQY6BkVG--4f1386d9aaf28c219f9675cc671bf0a204430fdb" \
--data '{
  "passwords": {
    "new": "333",
    "old": "444"
  }
}'
