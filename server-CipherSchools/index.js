const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello CipherSchools!");
});

app.listen(port, () => {
  console.log(`The server running on ${port}`);
});
