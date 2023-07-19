#!/bin/bash
ymd=$(date +%Y-%m-%d)
hms=$(date +%H:%M:%S)
curl -v \
-X PUT http://localhost:3000/api/services/$1 \
-H 'Content-Type:application/json' \
-d '{"name":"algum servico '${ymd}'","description":"alguma descricao '${hms}'","price":1400,"image":"http://"}' \
| json_pp

