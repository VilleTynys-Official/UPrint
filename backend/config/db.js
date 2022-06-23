//Sets up mongoose to connect to MongoDB.

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      user: 'admin',
      pass: 'test',
    });
    console.log('MongoDB connected!');
  } catch (err) {
    console.log('Mongoose connect error. Reason: ', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
