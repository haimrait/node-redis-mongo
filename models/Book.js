const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  author: String
});

mongoose.model("Book", bookSchema);
