var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.static("dist"));

// const https = require("https");
// const fs = require('fs');
// const key = fs.readFileSync('./key.pem');
// const cert = fs.readFileSync('./cert.pem');
// const server = https.createServer({key: key, cert: cert }, app);

// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT, function () {
  console.log(`Server listening on port ${process.env.PORT}!`);
});

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  //res.sendFile(path.resolve("src/client/views/index.html"));
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.get("/key", cors(), function (req, res) {
  res.send(process.env.API_KEY);
});
