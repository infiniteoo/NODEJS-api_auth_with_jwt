const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API!",
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  res.json({
    message: "post created",
  });
});

app.post("/api/login", (req, res) => {
  // mock user
  const user = {
    id: 1,
    username: "troy",
    email: "troydorman@gmail.com",
  };

  jwt.sign({ user }, "secretkey", (err, token) => {
    res.json({
      token,
    });
  });
});

// format of token
// authorization: bearer <access_token>

//verify token
function verifyToken(req, res, next) {
  // get auth header
  const bearerHeader = req.headers["authorization"];
  // check if beareris undefined
  if (typeof bearerHeader !== "undefined") {
    // split at the space
    const bearer = bearerHeader.split(" ");
    // get token from array
    const bearerToken = bearer[1];
    // set the token
    req.token = bearerToken;

    //next middleware
    next();
  } else {
    // forbidden
    res.sendStatus(403);
  }
}

app.listen(5000, () => {
  console.log("server started on port 5000");
});
