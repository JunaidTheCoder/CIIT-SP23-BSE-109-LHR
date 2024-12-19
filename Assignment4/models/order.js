// /models/Order.js

const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema({
  orderID: {
    type: String,
    required: true,
    unique: true
  },
  customer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true }
  },
  items: [
    {
      productID: { type: String, required: true },
      productName: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  totalAmount: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now }
});

// Create the model based on the schema
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
