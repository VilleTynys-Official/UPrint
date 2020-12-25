const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'usermodel',
  },
  filename: {
    type: String,
    required: true,
  },
  uri: {
    type: String,
    required: true,
  },
  settings: {
    type: String,
  },
  date: {
    type: String,
    default: Date.now(),
  },
  date_printed: {
    type: String,
  },
  readyToPrint: {
    type: Boolean,
    default: false,
  },
});

//compiling the schema into a model
module.exports = mongoose.model('filemodel', FileSchema);
