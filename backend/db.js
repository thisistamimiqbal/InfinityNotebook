const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/notebook';

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to Mongo successfully.');
  } catch (error) {
    console.error('Failed to connect to Mongo:', error.message);
    process.exit(1);
  }
};

module.exports = connectToMongo;