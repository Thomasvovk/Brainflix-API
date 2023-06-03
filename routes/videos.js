const { time } = require("console");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const filepath = "./data/videos.json";

// File Reading
function getVideos() {
  const videosData = fs.readFileSync(filepath);

  return JSON.parse(videosData);
}

// GET /videos
// POST /videos

router.use(express.static("public"));

router.get("/", (_req, res) => {
  const videos = getVideos();
  const selectedInfo = videos.map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    };
  });
  res.json(selectedInfo);
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

router.post("/", (req, res) => {
  const { title, description } = req.body;

  const newVideo = {
    id: uuidv4(),
    title: title,
    channel: "Thomas Vovk",
    image: "https://i.imgur.com/9rqDsHR.gif",
    description: description,
    views: "1,001,023",
    likes: "110,985",
    duration: "4:01",

    comments: [],
  };

  const videos = getVideos();
  videos.push(newVideo);
  fs.writeFile(filepath, JSON.stringify(videos), (err) => {
    if (err) {
      console.log("Error occured while writing data");
      return;
    }
    res.send(newVideo);
  });
});

module.exports = router;
