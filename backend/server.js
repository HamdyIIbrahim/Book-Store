const express = require('express');
const app = express();
const booksRoutes =require('./routes/books')

app.get('/',booksRoutes);
app.get('/books',booksRoutes);

app.listen(5000);