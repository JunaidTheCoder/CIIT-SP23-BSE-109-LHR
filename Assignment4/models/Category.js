const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true }
});

// Avoid model redefinition by checking if it already exists
const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

module.exports = Category;
