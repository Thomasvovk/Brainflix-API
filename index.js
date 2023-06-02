const express = require("express");
const app = express();
const cors = require("cors");
const videosRoutes = require("./routes/videos.js");
require("dotenv").config();

app.use("/videos", videosRoutes);

app.get("/", (req, res) => {
  res.send("Express is running!");
});

app.listen(8000, function () {
  console.log("Hello Wolrd");
});
