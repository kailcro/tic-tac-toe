API="https://tic-tac-toe-wdi.herokuapp.com"
curl "${API}/games/${ID}" \
--include \
--request DELETE \
--header "Authorization: Token token=${TOKEN}" \

echo
