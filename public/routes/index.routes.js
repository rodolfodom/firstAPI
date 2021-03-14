const Router = require("express").Router;
const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to my API!!");
});

module.exports = router;
