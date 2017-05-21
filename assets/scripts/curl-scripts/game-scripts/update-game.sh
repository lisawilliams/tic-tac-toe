

      curl "https://aqueous-atoll-85096.herokuapp.com/games/5643" \
      --request PATCH  \
      --header "Authorization: Token token=BAhJIiUwZjliNGVjYjY0ZWFlMWM1OTYzZTIwNGFhNGZhOTgwYwY6BkVG--b0a0772d31e4e8066905d2922cbde62abba399d8"\
      --data '{
          "game": {
            "cell": {
              "index": 1,
              "value": "o" },
              "over": false }
            }'

# This doesn't work. Returns error:
# curl: (3) [globbing] nested brace in column 15
