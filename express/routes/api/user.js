const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("shashi");
  res.status(200).json({
    name: "shashi",
    email: "shashikumarkushwaha3@gmail.com",
    age: 28,
  });
});
module.exports = router;
