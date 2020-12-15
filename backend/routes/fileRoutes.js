const express = require('express');
const router = express.Router();

// @route   GET api/files
// @desc    Get all user files
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all files');
});

// @route   POST api/files
// @desc    Post a file as a User
// @access  Private
router.post('/', (req, res) => {
  res.send('Add new file');
});

// @route   PUT api/files/:id
// @desc    Update a file as a User
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update file');
});

// @route   DELETE api/files/:id
// @desc    Delete a file as a User
// @access  Private
router.delete('/:id', (req, res) => {
  let tempID = req.params.id; //REMOVE this example..
  res.status(200).json({ tempID });
});

module.exports = router;
