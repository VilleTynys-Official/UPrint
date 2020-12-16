const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const fileRoutes = require('./fileRoutes');
const userRoutes = require('./userRoutes');

router.use('/auth', authRoutes);
router.use('/files', fileRoutes);
router.use('/users', userRoutes);

module.exports = router;
