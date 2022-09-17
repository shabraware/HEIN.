const express = require('express');

const { createOrder, updateOrder, deleteOrder, getUserOrders, getOrders, getMonthlyIncome } = require('../controllers/order');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/verifyToken');

const router = express.Router();

// POST => /api/orders 
router.post('/', verifyToken, createOrder);

// PATCH => /api/orders/:id
router.patch('/:id', verifyTokenAndAdmin, updateOrder);

// DELETE => /api/orders/:id
router.delete('/:id', verifyTokenAndAdmin, deleteOrder);

// GET => /api/orders/:userId
router.get('/:userId', verifyTokenAndAuthorization, getUserOrders);

// GET => /api/orders
router.get('/', verifyTokenAndAdmin, getOrders);

// GET => /api/orders/stats
router.get('/stats', verifyTokenAndAdmin, getMonthlyIncome);

module.exports = router;