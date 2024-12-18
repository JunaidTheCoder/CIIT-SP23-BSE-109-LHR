// /routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const { createOrder, getAllOrders } = require('../controllers/orderController');

// POST endpoint to create a new order
router.post('/order', createOrder);

// GET endpoint to retrieve all orders
router.get('/orders', getAllOrders);

module.exports = router;
