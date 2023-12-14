const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const router = require("./routes/api/user");

const app = express();

const PORT = process.env.PORT || 8000;
//  app.use(logger);
// app.use(express.static(path.join(__dirname)));
app.get("/home", (req, res) => {
  res.send("Hello world express");
});
app.use("/user", router);
app.get("/user/:id", (req, res) => {
  console.log("shashi");
  res.status(200).json({
    name: "shashi",
    email: "shashikumarkushwaha3@gmail.com",
  });
});
app.listen(PORT, () => {
  console.log("listening to port 8000");
});
