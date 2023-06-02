const express = require("express");
const router = express.Router();
const fs = require("fs");

const filepath = "./data/videos.json";

// File Reading
function getVideos() {
  const videosData = fs.readFileSync(filepath);

  return JSON.parse(videosData);
}

// function setVideos(videos) {
//   fs.writeFileSync(filepath, JSON.stringify(videos));
// }

// GET /videos
// POST /videos

router.get("/", (_req, res) => {
  const videos = getVideos();
  res.json(videos);
  console.log(videos);
});

router.post("/", (req, res) => {
  res.send({ msg: "User POST Endpoint reached" });
});

// Export the router so that the app can access it from the index.js file
module.exports = router;
