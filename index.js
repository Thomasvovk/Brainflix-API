const express = require("express");
const app = express();
const cors = require("cors");
const videosRoutes = require("./routes/videos.js");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/videos", videosRoutes);

app.get("/", (req, res) => {
  res.send("Express is running!");
});

app.listen(8080, function () {
  console.log("Hello Wolrd");
});
