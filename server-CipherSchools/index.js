const express = require("express");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 5000;
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello CipherSchools!");
});

app.get("/video", (req, res) => {
  res.sendFile("/assets/1.mp4", { root: __dirname });
});

app.listen(port, () => {
  console.log(`The server running on ${port}`);
});
