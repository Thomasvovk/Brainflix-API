const express = require("express");
const router = express.Router();
const fs = require("fs");

const filepath = "./data/videos.json";

// File Reading
function getVideos() {
  const videosData = fs.readFileSync(filepath);

  return JSON.parse(videosData);
}

// GET /videos
// POST /videos

router.get("/", (_req, res) => {
  const videos = getVideos();
  res.json(videos);
  console.log(videos);
});

router.get("/:id", (req, res) => {
  const requestedID = req.params.id;
  const foundVideo = getVideos().find((video) => {
    return video.id === requestedID;
  });
  if (foundVideo) {
    return res.json(foundVideo);
  } else {
    return res.status(404).json({
      error: `Video is not found with this ID${requestedID}`,
    });
  }
});

module.exports = router;
