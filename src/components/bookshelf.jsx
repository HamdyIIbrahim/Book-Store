import React from 'react'
import Book from './book';

function BookShelf() {
  
  return (
    <div className="bookShelfContainer">
        {
          fetch("/books").then(data=>{
            
          })
        }
    </div>
  )
}

export default BookShelf;