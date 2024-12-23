const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
});

// Avoid model redefinition by checking if it already exists
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

module.exports = Product;
