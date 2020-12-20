const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const FileModel = require('../models/FileModel');
const UserModel = require('../models/UserModel');

const postFilesValidator = [
  check('name', 'Name is required').not().isEmpty(),
  check('uri', 'Uri is required').not().isEmpty(),
];

// @route   GET api/files
// @desc    Get all user files
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const files = await FileModel.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(files);
  } catch (error) {
    res.status(500).json({ msg: 'Internal server error' });
  }
});

// @route   POST api/files
// @desc    Post a file as a User
// @access  Private
router.post('/', [auth, postFilesValidator], async (req, res) => {
  const { filename, uri, settings, readyToPrint } = req.body; //TODO add a check that these exist.

  try {
    const newFile = new FileModel({
      user: req.user.id,
      filename: filename,
      uri: uri,
      settings: settings,
      readyToPrint: readyToPrint,
    });

    newFile.save((err, saved) => {
      if (err) {
        console.log('Error while saving. Reason: ', err);
      } else {
        console.log('mongo saved files: ', saved);
        res.status(201).json({ saved });
      }
    });
  } catch (err) {
    console.log('Error while posting a file. Reason: ', err);
    res.status(500).json({ msg: 'Internal server error' });
  }
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
