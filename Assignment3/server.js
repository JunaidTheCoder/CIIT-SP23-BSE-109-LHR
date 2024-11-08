const express = require('express');
let server = express();

server.use(express.static("public"));

server.set("view engine","ejs");

server.get("/", (req, res) => {
  res.render("index");
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});