const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API!",
  });
});

app.post("/api/posts", (req, res) => {
  res.json({
    message: "post created",
  });
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
