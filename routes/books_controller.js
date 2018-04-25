const express = require('express');
const router = express.Router();
const Book = require('../models').book;

// index route
router.get('/', (req, res) => {
  // res.send('we did it');

  Book.findAll()
    .then((books) => {
      res.render('books/index', {
        books
      });
    })
    .catch((err) => {
      res.status(400).render('error');
    });
});

module.exports = router;
