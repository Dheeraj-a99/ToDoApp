const mongoose = require("mongoose");

const todoItems = new mongoose.Schema({
  title : {
    type: String,
    required: true
  },
  category : {
    type: String,
    required: true
  },
  date : {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("todoItems", todoItems);
