const MongoClient = require("mongodb").MongoClient;

async function connect() {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://generalRank:Rufetty2%2E@cluster0.37ghr.mongodb.net/firstapi?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
      }
    );
    const db = client.db("node-restapi");
    console.log("db is connected");
    return db;
  } catch (err) {
    console.log(err);
  }
}

module.exports = connect;
