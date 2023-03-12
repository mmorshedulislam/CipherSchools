const express = require("express");
const fs = require("fs");
const thumbsupply = require("thumbsupply");
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { json } = require("express");
const app = express();

app.use(cors());
app.use(json());

const videos = [
  {
    id: 1,
    title: "The Breathtaking Beauty of Nature | HD",
    url: "IUN664s7N-c",
    thumb: "https://i.ytimg.com/vi/IUN664s7N-c/maxresdefault.jpg",
    duration: 1,
    views: 233,
  },
  {
    id: 2,
    title: "The Magnificent Beauty of Nature | Adiemus • HD",
    url: "B66lqt0K2I0",
    thumb: "https://i.ytimg.com/vi/B66lqt0K2I0/maxresdefault.jpg",
    duration: 4,
    views: 89,
  },
  {
    id: 3,
    title:
      "Epic Inspirational and Cinematic Motivational Background Music - by AShamaluevMusic",
    url: "CvLHKUtcFg4",
    thumb: "https://i.ytimg.com/vi/CvLHKUtcFg4/maxresdefault.jpg",
    duration: 2,
    views: 120,
  },
  {
    id: 4,
    title: "Cinematic Background Music - Into The Nature Vol. 01",
    url: "S6W9bNo4wHk",
    thumb: "https://i.ytimg.com/vi/S6W9bNo4wHk/maxresdefault.jpg",
    duration: 3,
    views: 70,
  },
];

const uri = `mongodb+srv://${process.env.dbuser}:${process.env.dbuserpass}@cluster0.mzbzmmm.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

async function run() {
  try {
    const videoCollection = client.db("cipherschools").collection("videos");
    const commentCollection = client.db("cipherschools").collection("comments");
    const notificationCollection = client
      .db("cipherschools")
      .collection("notifications");

    // add video
    app.post("/addvideo", async (req, res) => {
      const video = req.body;
      console.log(video);
      const result = await videoCollection.insertOne(video);
      res.send(result);
    });

    // get all videos
    app.get("/videos", async (req, res) => {
      const videos = await videoCollection.find({}).toArray();
      res.send(videos);
    });

    // get video by id
    app.get("/player/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const video = await videoCollection.findOne(filter);
      res.send(video);
    });

    // add comment
    app.post("/addcomment", async (req, res) => {
      const comment = req.body;
      const result = await commentCollection.insertOne(comment);
      res.send(result);
    });

    // get all comments
    app.get("/comments", async (req, res) => {
      const videos = await commentCollection
        .find({})
        .sort({ _id: -1 })
        .toArray();
      res.send(videos);
    });

    // new notification
    app.post("/newnotification", async (req, res) => {
      const video = req.body;
      const result = await notificationCollection.insertOne(video);
      res.send(result);
    });

    // get all notification
    app.get("/notifications", async (req, res) => {
      const notifications = await notificationCollection.find({}).toArray();
      res.send(notifications);
    });
  } finally {
  }
}
run().catch(console.dir);

// Get video caption
app.get("/video/:id/caption", function (req, res) {
  res.sendFile("assets/captions/sample.vtt", { root: __dirname });
});

app.listen(5000, function () {
  console.log("Listening on port 5000!");
});
