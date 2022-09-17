const User = require('../models/User');

module.exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      {
        new: true
      }
    );
    // updatedUser is the document after update because of new: true
    res.status(200).json({
      message: 'User is updated successfully!',
      updatedUser
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'User is deleted successfully!'
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getUsers = async (req, res) => {
  const query = req.query.new || false;
  try {
    const users = query ?
      await User.find().sort({ _id: -1 }).limit(5) : // -1 => descending order & 1 => ascending order 
      await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getUsersStats = async (req, res) => {
  const date = new Date();
  const lastYearDate = new Date(date.setFullYear(date.getFullYear() - 1)); // setFullYear returns a new timestamp.
  try {
    // TODO Make sure I understand it
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYearDate } } },
      {
        $project: {
          month: { $month: "$createdAt" } // Add a new field (month) with the $month of $createdAt
        }
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        }
      }
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};