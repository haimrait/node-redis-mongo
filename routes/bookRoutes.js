const mongoose = require("mongoose");
const Book = mongoose.model("Book");

module.exports = app => {
  app.get("/api/books", async (req, res) => {
    let books;
    if (req.query.author) {
      books = await Book.find({ author: req.query.author });
    } else {
      books = await Book.find();
    }

    res.send(books);
  });

  app.post("/api/books", async (req, res) => {
    const { title, content, author } = req.body;

    const book = new Book({
      title,
      content,
      author
    });

    try {
      await book.save();
      res.send(book);
    } catch (err) {
      res.send(400, err);
    }
  });
};
