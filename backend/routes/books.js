const express = require('express');
const router = express.Router();
const {getAllBooks , getPopularBooks,uploadBook} =require('../Controllers/booksControl')


router.post('/upload',)
router.get('/',getPopularBooks);
router.get('/books',getAllBooks);
router.post('/upload',uploadBook);


module.exports=router;