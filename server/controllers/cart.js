const Cart = require('../models/Cart');

module.exports.createCart = async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(201).json({
      message: 'Cart is created successfully.',
      product: savedCart
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      {
        new: true
      });
    res.status(200).json({
      message: "Cart is updated successfully.",
      updatedCart
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Cart is deleted successfully."
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      userId: req.params.userId
    });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports.getCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
};