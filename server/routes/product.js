const express = require('express');

const { addProduct, updateProduct, deleteProduct, getProduct, getProducts } = require('../controllers/product');
const { verifyTokenAndAdmin } = require('../middlewares/verifyToken');

const router = express.Router();

// POST => /api/products
router.post('/', verifyTokenAndAdmin, addProduct);

// PATCH => /api/products/:id
router.patch('/:id', verifyTokenAndAdmin, updateProduct);

// DELETE => /api/products/:id
router.delete('/:id', verifyTokenAndAdmin, deleteProduct);

// GET => /api/products/:id
router.get('/:id', getProduct);

// GET => /api/products
router.get('/', getProducts);
module.exports = router;