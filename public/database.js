require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

async function connect() {
  try {
    const client = await MongoClient.connect(process.env.DATABASE_STRING, {
      useUnifiedTopology: true,
    });
    const db = client.db("node-restapi");
    console.log("db is connected");
    return db;
  } catch (err) {
    console.log(err);
  }
}

module.exports = connect;
