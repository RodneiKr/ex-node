#!/bin/bash
ymd=$(date +%Y-%m-%d)
hms=$(date +%H:%M:%S)
curl -v \
-X PUT http://localhost:3000/api/parties/$1 \
-H 'Content-Type:application/json' \
-d '{"title":"algum titulooooooooo '${ymd}'","author":"uuuuhhhhhuuuu","description":"alguma descricao '${hms}'","budget":1000,"image":"http://","services":[{"name":"barman","description":"descr","price":999,"image":"http://barman.com"}]}' \
| json_pp

