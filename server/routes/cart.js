const express = require('express');

const { createCart, updateCart, deleteCart, getUserCart, getCarts } = require('../controllers/cart');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/verifyToken');

const router = express.Router();

// POST => /api/carts 
router.post('/', verifyToken, createCart);

// PATCH => /api/carts/:id
router.patch('/:id', verifyTokenAndAuthorization, updateCart);

// DELETE => /api/carts/:id
router.delete('/:id', verifyTokenAndAuthorization, deleteCart);

// GET => /api/carts/:userId
router.get('/:userId', getUserCart);

// GET => /api/carts
router.get('/', verifyTokenAndAdmin, getCarts);

module.exports = router;