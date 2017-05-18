# Curl script to sign out user


curl "http://tic-tac-toe.wdibos.com/sign-out/77" \
  --include \
  --request DELETE \
 --header "Authorization: Token token=BAhJIiVjNmMyNTViYTlmNGJjYzUyMDY3ZDk1ZGNiNzJkMWZjNwY6BkVG--837ad42237719ed8f0826a17a6ef30bfaa10d3e3"

# Successful! Returns 204 as desired
# Returns:
# ~/wdi/projects/tic-tac-toe (development)
# $ curl "http://tic-tac-toe.wdibos.com/sign-out/77" \
# >   --include \
# >   --request DELETE \
# >  --header "Authorization: Token token=BAhJIiVjNmMyNTViYTlmNGJjYzUyMDY3ZDk1ZGNiNzJkMWZjNwY6BkVG--837ad42237719ed8f0826a17a6ef30bfaa10d3e3"
# HTTP/1.1 204 No Content
# Server: nginx/1.4.6 (Ubuntu)
# Date: Wed, 17 May 2017 15:03:36 GMT
# Connection: keep-alive
# X-Frame-Options: SAMEORIGIN
# X-XSS-Protection: 1; mode=block
# X-Content-Type-Options: nosniff
# Cache-Control: no-cache
# X-Request-Id: 52c396be-c5ef-4f5c-bc9e-7a758b6470ad
# X-Runtime: 0.010944
# Vary: Origin
