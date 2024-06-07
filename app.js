const server = require("http");
const express = require("express");
const app = express();
const port = 3001;
server.createServer(app).listen(port, () => {});
app.use("/", (req, res, next) => {
  console.log("sever is running");
  res.end("welcome the server is running");
});
