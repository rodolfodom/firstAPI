const app = require("./server.js");
const connect = require("./database.js");

async function main() {
  await app.listen(app.get("port"));
  console.log("Server on port", app.get("port"));
}

main();
