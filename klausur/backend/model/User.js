const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    min: 3
  },
  email:{
    type: String,
    require: true,
    max: 255
  },
  password:{
    type: String,
    required: true,
    min: 6
  },
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('User', userSchema);