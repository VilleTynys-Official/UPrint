const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/UserModel');

const signinValidator = [
  check('email', 'Please add email').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(), //error checking with express-validator
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
];

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', signinValidator, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send('pass');
});

module.exports = router;
