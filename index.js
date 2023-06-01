const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Express is running!");
});

app.listen(8000, function () {
  console.log("Hello Wolrd");
});
