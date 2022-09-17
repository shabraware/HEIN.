const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const User = require('../models/User');

module.exports.register = (req, res, next) => {
  // const errors = validationResult(req);
  // !errors.isEmpty() && res.status(400).json({ errors: errors.array() });
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const isAdmin = req.body.isAdmin || false;
  bcrypt.hash(password, 12)
    .then(hashedPassword => {
      const user = new User({
        username,
        email,
        password: hashedPassword,
        isAdmin
      });
      return user.save();
    })
    .then(user => {
      res.status(201).json({
        message: 'User is registered successfully.',
        user
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
};

module.exports.login = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  let user;
  User.findOne({ username })
    .then(foundUser => {
      !foundUser && res.status(400).json({
        message: 'Username is not valid!'
      });
      user = foundUser;
      return bcrypt.compare(password, user.password);
    })
    .then(isEqual => {
      !isEqual && res.status(400).json({
        message: 'Password is not correct!'
      });
      // Generate the JWT
      const token = jwt.sign(
        {
          id: user._id.toString(),
          isAdmin: user.isAdmin
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: '1d'
        }
      );
      res.status(200).json({
        message: 'User is logined successfully.',
        token,
        userId: user._id.toString(),
        isAdmin: user.isAdmin
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
};