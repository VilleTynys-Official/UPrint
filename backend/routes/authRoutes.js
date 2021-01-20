const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const config = require('config');
const auth = require('../middleware/auth');
const UserModel = require('../models/UserModel');

const signinValidator = [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
];

// @route   GET api/auth
// @desc    Get logged in user data (except password)
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    let user = await UserModel.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// @route   POST api/auth
// @desc    Signin with email and password
// @access  Public
router.post('/', signinValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Failed to authorize user. Reason: ', errors.msg);
    return res.status(400).json({ msg: errors.array()[0].msg }); //returns the first reason for failure as a message
  }

  //PASSWORD CHECK
  try {
    let user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ msg: 'Forbidden' });
    }

    let passwordsMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordsMatch) {
      return res.status(400).json({ msg: 'Forbidden' });
    }

    //TOKEN PROCESS
    let payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      {
        expiresIn: 60 * 60 * 10,
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).send({ token });
      }
    );
  } catch (err) {
    res.status(500).json({ msg: 'Internal server error' });
  }
});

module.exports = router;
