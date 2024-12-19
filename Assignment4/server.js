


const express = require('express');
let server = express();

server.use(express.static("public"));
server.set("view engine", "ejs");

server.get("/index", (req, res) => {
  res.render("index");
});

server.get("/managment", (req, res) => {
  res.render("managment");
});

server.get("/admin", (req, res) => {
  res.render("admin");
});

server.get("/formPage", (req, res) => {
  res.render("formPage");
});

server.get("/checkout", (req, res) => {
  res.render("checkout");
});

server.get("/adminn", (req, res) => {
  res.render("adminn");
});

server.get("/addProduct", (req, res) => {
  res.render("addProduct");
});

server.get("/order", (req, res) => {
  res.render("order");
});
//

server.get("/", async (req, res) => {
  return res.render("login");
});


server.listen(5000, () => {
  console.log('Server running on port 5000');
});

const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});


