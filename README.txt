docker run -it --rm --name backend -v /home/dados/workspace/node/backend:/usr/src/app -w /usr/src/app node:14 npm init -y
su -
cd /home/dados/workspace/node/backend; chmod 777 package.json; exit
docker run -it --rm --name backend -v /home/dados/workspace/node/backend:/usr/src/app -w /usr/src/app node:14 npm i express mongoose cors
docker run -it --rm --name backend -v /home/dados/workspace/node/backend:/usr/src/app -w /usr/src/app node:14 npm i -D nodemon
vi app.js
vi package.json
docker run -it --rm --name backend -v /home/dados/workspace/node/backend:/usr/src/app -w /usr/src/app node:14 npm start


mongosh
use app_db
db.createUser(
{ 
  user: "hello_admin",
  pwd:  "hello123",
  roles:
  [
    { role:"readWrite",db:"config"},
    "clusterAdmin"
  ] 
} );
