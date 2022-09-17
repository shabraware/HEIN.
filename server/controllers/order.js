const Order = require('../models/Order');

module.exports.createOrder = async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(201).json({
      message: 'Order is created successfully.',
      product: savedOrder
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      {
        new: true
      });
    res.status(200).json({
      message: "Order is updated successfully.",
      updatedOrder
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Order is deleted successfully."
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.params.userId
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getMonthlyIncome = async (req, res) => {
  const date = new Date();
  const lastMonthDate = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonthDate = new Date(new Date().setMonth(lastMonthDate.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: prevMonthDate } } },
      {
        $project: {
          month: { $month: '$createdAt' }, // Add a new field (month) with the $month of $createdAt
          sales: "$amount" // Rename the field amount to sales
        }
      },
      {
        $group: {
          _id: '$month',
          total: {
            $sum: "$sales"
          }
        }
      }
    ]);
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json(error);
  }
};