// /controllers/orderController.js

const Order = require('../models/order');

// Create a new order
const createOrder = async (req, res) => {
  try {
    const { orderID, customer, items, totalAmount } = req.body;

    const newOrder = new Order({
      orderID,
      customer,
      items,
      totalAmount,
    });

    await newOrder.save();

    res.status(201).json({
      message: 'Order created successfully',
      order: newOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create order' });
  }
};

// Get all orders (for the admin panel)
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ orderDate: -1 }); // Sort orders in descending order
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve orders' });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
};
