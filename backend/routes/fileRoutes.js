const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const FileModel = require('../models/FileModel');
const UserModel = require('../models/UserModel');

const postFilesValidator = [
  check('filename', 'Filename is required').not().isEmpty(),
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
    res.status(500).json({ msg: 'Server error' });
  }
});

// @route   POST api/files
// @desc    Post a file as a User
// @access  Private
router.post('/', [auth, postFilesValidator], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }

  const { filename, uri, settings, readyToPrint } = req.body;

  try {
    const newFile = new FileModel({
      user: req.user.id, //this comes from the auth middleware (which takes it from the token)
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
    res.status(500).json({ msg: 'Server error' });
  }
});

// @route   PUT api/files/:id
// @desc    Update a file as a User
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { filename, uri, settings, readyToPrint } = req.body;

  //Build file object
  const fileFields = {};
  if (filename) fileFields.filename = filename;
  if (uri) fileFields.uri = uri;
  if (settings) fileFields.settings = settings;
  if (readyToPrint) fileFields.readyToPrint = readyToPrint;

  try {
    let file = await FileModel.findById(req.params.id);
    if (!file) return res.status(400).json({ msg: 'File not found' });

    //Make sure user owns files
    if (file.user.toString() !== req.user.id) {
      return res.status(400).json({ msg: 'Not authorized' });
    }
    file = await FileModel.findByIdAndUpdate(
      req.params.id,
      { $set: fileFields },
      { new: true }
    );
    res.json({ file });
  } catch (err) {
    console.log('Updating files failed. Reason: ', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// @route   DELETE api/files/:id
// @desc    Delete a file as a User
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let file = await FileModel.findById(req.params.id);
    if (!file) return res.status(400).json({ msg: 'File not found' });

    //Make sure user owns files
    if (file.user.toString() !== req.user.id) {
      return res.status(400).json({ msg: 'Not authorized' });
    }

    await FileModel.findByIdAndRemove(req.params.id);
    res.json({ msg: 'File removed' });
  } catch (err) {
    console.log('Deleting file failed. Reason: ', err);
    res.status(500).json({ msg: 'Server error' });
  }
  res.status(200).json();
});

module.exports = router;
