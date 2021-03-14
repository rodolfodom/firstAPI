const Router = require("express").Router;
const router = Router();

//database Connetion
const connect = require("../database.js");

router.get("/", async (req, res) => {
  const db = await connect();
  const tasks = await db.collection("tasks").find({}).toArray();
  console.log(tasks);
  res.json(tasks);
});

module.exports = router;
