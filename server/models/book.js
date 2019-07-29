const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  authorId: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
