const express = require("express");
const UserRouter = require("./routes-api/user");
const app = express();

app.use("/", UserRouter);
app.use("/user", UserRouter);

app.listen(8000, () => {
  console.log("lestining");
});
