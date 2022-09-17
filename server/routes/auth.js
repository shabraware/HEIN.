const express = require('express');
const { body } = require('express-validator');

const { login, register } = require('../controllers/auth');

const router = express.Router();

// POST => /api/auth/register
router.post('/register', [
  // Add validation as data will be stored in the database.
  // body('username')
  //   .trim().not().isEmpty().withMessage('Username is required!')
  //   .custom((value) => {
  //     return User.findOne({ username: value }).then((foundUser) => {
  //       if (foundUser) return Promise.reject('Username already exists!');
  //     });
  //   }),
  // body('email')
  //   .trim().not().isEmpty().withMessage('Email address is required!')
  //   .isEmail().withMessage('Invalid email address!')
  //   .custom((value) => {
  //     return User.findOne({ email: value }).then((foundUser) => {
  //       if (foundUser) return Promise.reject('Email already in use!');
  //     });
  //   }).normalizeEmail(),
  // body('password').trim().isLength({ min: 8 }).withMessage('Too short password!')
], register);

// POST => /api/auth/login
router.post('/login', login);

module.exports = router;