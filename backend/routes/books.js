const express = require('express');
const router = express.Router();
const {getAllBooks , getPopularBooks} =require('../Controllers/booksControl')
router.get('/',getPopularBooks);
router.get('/books',getAllBooks);


module.exports=router;