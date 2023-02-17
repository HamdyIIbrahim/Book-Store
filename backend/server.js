const express = require('express');
const app = express();
const booksRoutes =require('./routes/books')
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bookstore:OkfPSXbgMUoANdSO@bookstore.wfck5h2.mongodb.net/test').then(()=>{
    console.log("connected");
}).catch(()=>{
    console.log("failed to connect");
})
const bookSchema =new mongoose.Schema({
    bookName:String,
    bookImg:String
})
const books = mongoose.model("Books",bookSchema);



app.get('/',booksRoutes);
app.get('/books',booksRoutes);

app.listen(5000);