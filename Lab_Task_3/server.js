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
  console.log('              0    C      ');
  console.log('            0      O     ');
  console.log('          0        N     ');
  console.log('   0    0          S      ');
  console.log('     0             O         ');
  console.log('                   L         ');
});