require("dotenv").config();
const app = require("./server.js");
const connect = require("./database.js");

console.log(process.env.NODE_ENV);

async function main() {
  await app.listen(app.get("port"));
  console.log("Server on port", app.get("port"));
}

main();
