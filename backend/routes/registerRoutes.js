const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const config = require('config');
const UserModel = require('../models/UserModel');

const signinValidator = [
  check('email', 'Please add email').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
];

// @route   POST api/register
// @desc    Register a user
// @access  Public
router.post('/', signinValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() }); //returns []
  }

  const { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email: email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    //create mongoose document based on User model
    user = new UserModel({
      email: email,
      password: password,
    });

    //PASSWORD PROCESS
    //hash (password with salt) and save user to db.
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save(); //update db

    //TOKEN PROCESS
    const payload = { user: { id: user.id } };

    //10 hours
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 60 * 60 * 10 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.log('Failed to register user. Reason: ', err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
