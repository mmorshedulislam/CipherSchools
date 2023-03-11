const express = require("express");
const fs = require("fs");
const thumbsupply = require("thumbsupply");
const cors = require("cors");
const app = express();

const videos = [
  {
    id: 1,
    title: "The Breathtaking Beauty of Nature | HD",
    url: "IUN664s7N-c",
    thumb: "https://i.ytimg.com/vi/IUN664s7N-c/maxresdefault.jpg",
    duration: 1,
    views: 233
  },
  {
    id: 2,
    title: "The Magnificent Beauty of Nature | Adiemus • HD",
    url: "B66lqt0K2I0",
    thumb: "https://i.ytimg.com/vi/B66lqt0K2I0/maxresdefault.jpg",
    duration: 4,
    views: 89
  },
  {
    id: 3,
    title:
      "Epic Inspirational and Cinematic Motivational Background Music - by AShamaluevMusic",
    url: "CvLHKUtcFg4",
    thumb: "https://i.ytimg.com/vi/CvLHKUtcFg4/maxresdefault.jpg",
    duration: 2,
    views: 120
  },
  {
    id: 4,
    title: "Cinematic Background Music - Into The Nature Vol. 01",
    url: "S6W9bNo4wHk",
    thumb: "https://i.ytimg.com/vi/S6W9bNo4wHk/maxresdefault.jpg",
    duration: 3,
    views: 70
  },
];

app.use(cors());

// Get all videos
app.get("/videos", function (req, res) {
  res.json(videos);
});

// Get video caption
app.get("/video/:id/caption", function (req, res) {
  res.sendFile("assets/captions/sample.vtt", { root: __dirname });
});

// Get Video and it's desc
app.get("/player/:id", function (req, res) {
  const id = parseInt(req.params.id, 10);
  res.json(videos[id]);
});


app.listen(5000, function () {
  console.log("Listening on port 5000!");
});
