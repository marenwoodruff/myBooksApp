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

// new route
router.get('/new', (req, res) => {
  // res.send('we knew it');
  
  res.render('books/new');
});

// show route
router.get('/:id', (req, res) => {
  // res.send('we showed it');

  Book.findById(req.params.id)
    .then((book) => {
      res.render('books/show', {
         book
      });
    })
    .catch((err) => {
      res.status(400).render('error');
    });
});

module.exports = router;
