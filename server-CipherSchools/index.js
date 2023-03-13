const express = require("express");
const fs = require("fs");
const thumbsupply = require("thumbsupply");
const port = process.env.PORT || 5000;
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

    // add new video
    app.post("/addvideo", async (req, res) => {
      const video = req.body;
      const result = await videoCollection.insertOne(video);
      res.send(result);
    });

    // get all videos
    app.get("/videos", async (req, res) => {
      const videos = await videoCollection.find({}).toArray();
      res.send(videos);
    });

    // get all trending videos
    app.get("/trending", async (req, res) => {
      const videos = await videoCollection.find({}).sort({ _id: -1 }).toArray();
      res.send(videos);
    });

    // get video by id
    app.get("/player/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const video = await videoCollection.findOne(filter);
      res.send(video);
    });

    // add new comment
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

    // add new notification
    app.post("/newnotification", async (req, res) => {
      const video = req.body;
      const result = await notificationCollection.insertOne(video);
      res.send(result);
    });

    // get all notifications
    app.get("/notifications", async (req, res) => {
      const notifications = await notificationCollection
        .find({})
        .sort({ _id: -1 })
        .toArray();
      res.send(notifications);
    });

    // add to like
    app.put("/addtolike/:id", async (req, res) => {
      const id = req.params.id;
      const likes = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          likes: likes.likes + 1 || 1,
        },
      };
      const result = await videoCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("The Server is Running...");
});

app.listen(port, function () {
  console.log("Listening on port", port);
});
