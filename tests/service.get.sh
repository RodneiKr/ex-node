#!/bin/bash
curl -v \
-X GET http://localhost:3000/api/services/$1 \
| json_pp
