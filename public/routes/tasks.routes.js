const Router = require("express").Router;
const router = Router();
const objectID = require("mongodb").ObjectID;

//database Connetion
const connect = require("../database.js");

//GET method

router.get("/", async (req, res) => {
  const db = await connect();
  const tasks = await db.collection("tasks").find({}).toArray();
  console.log(tasks);
  res.json(tasks);
});

//POST method

router.post("/", async (req, res) => {
  const task = {
    task: req.body.task,
    description: req.body.description,
    asignature: req.body.asignature,
    schedule: req.body.schedule,
  };
  const db = await connect();
  const result = await db.collection("tasks").insertOne(task);
  res.json(result);
});

//GET method

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const answer = await db.collection("tasks").findOne({ _id: objectID(id) });
  res.json(answer);
});

//DELETE method
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const answer = await db.collection("tasks").deleteOne({ _id: objectID(id) });
  res.json(answer);
});

//PUT method
router.put("/:id", async (req, res) => {
  const { id } = req.body;
  const updateData = {
    task: req.body.task,
    description: req.body.description,
    asignature: req.body.asignature,
    schedule: req.body.schedule,
  };
  const db = await connect();
  const updatedData = await db
    .collection("tasks")
    .updateOne({ _id: objectID(id) }, { $set: updateData });
  res.json(updatedData);
});

module.exports = router;
