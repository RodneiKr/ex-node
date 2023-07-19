#!/bin/bash
ymd=$(date +%Y-%m-%d)
hms=$(date +%H:%M:%S)
curl -v \
-X POST http://localhost:3000/api/parties \
-H 'Content-Type:application/json' \
-d '{"title":"algum titulo '${ymd}'","author":"eu","description":"alguma descricao '${hms}'","budget":1000,"image":"http://","services":[{"name":"barman","description":"descr","price":1999,"image":"http://barman.com"}]}' \
| json_pp

