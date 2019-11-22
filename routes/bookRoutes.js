module.exports = app => {
  app.get("/api/books", (req, res) => {
    res.send("ok");
  });
};
