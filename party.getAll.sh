#!/bin/bash
curl -v \
-X GET http://localhost:3000/api/parties \
| json_pp
