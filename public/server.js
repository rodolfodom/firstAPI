const express = require("express");

const app = express();

//Routes
const indexRoutes = require("./routes/index.routes.js");
const tasksRoutes = require("./routes/tasks.routes.js");

//settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(express.json());

app.use(indexRoutes);
app.use("/tasks", tasksRoutes);
module.exports = app;
