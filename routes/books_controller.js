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

  res.render('books/new', {
    // building an instance of book
    book: Book.build()
  })
  .catch((err) => {
    res.status(400).render('error');
  });
});

// create route
router.post('/', (req, res) => {
  // requires an object with properties that map to the properties of the object
  Book.create(req.body)
    .then((hobby) => {
      res.redirect('/books');
    })
    .catch((err) => {
      res.status(400).render('error');
    });
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

// edit route
router.get('/:id/edit', (req, res) => {
  // res.send('we do it');
  Book.findById(req.params.id)
    .then((book) => {
      res.render('books/edit', {
      	  id: req.params.id,
         book
      });
    })
    .catch((err) => {
      res.status(400).render('error');
    });
});

// update route
router.put('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      return book.update(req.body); // update method returns a promise
    })
    .then((updatedBook) => { // the book parameter is the updated hobby
      res.render('books/show', {
        book: updatedBook
      });
    })
    .catch((err) => {
      res.status(400).render('error');
    });
});

// delete route
router.delete('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      return book.destroy(); // destroy method is an asynchronous call that returns a promise
    })
    .then(() => {
      // redirect back to index route
      res.redirect('/books');
    })
    .catch((err) => {
      res.status(400).render('error');
    });
});

module.exports = router;
