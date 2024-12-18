const express = require('express');
let server = express();

server.use(express.static("public"));
server.set("view engine", "ejs");

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
  console.log('Server running on port 5000');
});

const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
