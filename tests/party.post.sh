#!/bin/bash
budget=$1
if [ -z $budget ]
then
  budget=1000
fi
ymd=$(date +%Y-%m-%d)
hms=$(date +%H:%M:%S)
curl -v \
-X POST http://localhost:3000/api/parties \
-H 'Content-Type:application/json' \
-d '{"title":"algum titulo '${ymd}'","author":"eu","description":"alguma descricao '${hms}'","budget":'${budget}',"image":"http://","services":[{"name":"barman","description":"descr","price":1999,"image":"http://barman.com"}]}' \
| json_pp

