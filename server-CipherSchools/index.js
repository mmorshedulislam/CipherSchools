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
