#!/bin/bash
curl -v \
-X DELETE http://localhost:3000/api/services/$1 \
| json_pp
