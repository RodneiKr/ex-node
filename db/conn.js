const mongoose = require("mongoose");
const server = "mongodb:27017";
const database = "app_db";
//const user = "root"
//const pwd = "123456"

async function main() {
  mongoose.set("strictQuery", true);
  // https://www.geeksforgeeks.org/create-user-and-add-role-in-mongodb/
  // https://www.bogotobogo.com/DevOps/Docker/Docker-Compose-Node-MongoDB.php
  // https://attacomsian.com/blog/mongoose-connect-async-await
  await mongoose
    .connect(`mongodb://${server}/${database}`)
    .then(() => {
      console.log('MongoDB conectado!')
    })
    .catch(err => {
      console.log('>>>>>>>> FAILED conexao com o MongoDB:\n', err)
    });
}

module.exports = main;

