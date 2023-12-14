const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/", (req, res) => {
  res.json({
    name: "shashi",
    age: 28,
  });
});
module.exports = router;
