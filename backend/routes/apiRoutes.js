const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const fileRoutes = require('./fileRoutes');
const userRoutes = require('./userRoutes');

router.use('/auth', authRoutes);
router.use('/file', fileRoutes);
router.use('/user', userRoutes);

module.exports = router;
