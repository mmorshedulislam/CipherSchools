const express = require("express");
const fs = require("fs");
const thumbsupply = require("thumbsupply");
const cors = require("cors");
const app = express();

// const videos = [
//   {
//     id: 0,
//     poster: "/video/0/poster",
//     duration: "3 mins",
//     name: "Sample 1",
//   },
//   {
//     id: 1,
//     poster: "/video/1/poster",
//     duration: "4 mins",
//     name: "Sample 2",
//   },
//   {
//     id: 2,
//     poster: "/video/2/poster",
//     duration: "2 mins",
//     name: "Sample 3",
//   },
// ];

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

// endpoint to fetch all videos metadata
app.get("/videos", function (req, res) {
  res.json(videos);
});

app.get("/video/:id/caption", function (req, res) {
  res.sendFile("assets/captions/sample.vtt", { root: __dirname });
});

app.get("/video/:id/poster", function (req, res) {
  thumbsupply
    .generateThumbnail(`assets/${req.params.id}.mp4`)
    .then((thumb) => res.sendFile(thumb))
    .catch((err) => console.log(err));
});

// endpoint to fetch a single video's metadata
app.get("/video/:id/data", function (req, res) {
  const id = parseInt(req.params.id, 10);
  res.json(videos[id]);
});

app.get("/player/:id", function (req, res) {
  const id = parseInt(req.params.id, 10);
  res.json(videos[id]);
});

app.get("/video/:id", function (req, res) {
  const path = `assets/${req.params.id}.mp4`;
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;
  if (range) {
    console.log("we have range", range);
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    console.log(parts);
    const chunksize = end - start + 1;
    const file = fs.createReadStream(path, { start, end });
    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    console.log("no range", range);
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
  }
});

app.listen(5000, function () {
  console.log("Listening on port 5000!");
});
