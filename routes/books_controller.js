const express = require('express');
const router = express.Router();
const Book = require('../models').book;

// index route
router.get('/', (req, res) => {
  res.send('we did it');
});

module.exports = router;
