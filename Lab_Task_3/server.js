const express = require('express');
let server = express();

server.use(express.static("public"));

server.set("view engine","ejs");

server.get("/", (req, res) => {
res.render("index");
});

server.get("/admin", (req, res) => {
  res.render("admin");
  });

  
server.get("/formPage.ejs", (req, res) => {
  res.render("formPage");
  });

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});