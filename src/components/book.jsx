import React from 'react'

function Book(bookName,bookUrl) {
  return (
    <div className='bookContainer'>
        <img className='bookImg' src={require(bookUrl)} alt="book" />
        <h5>{bookName}</h5>
    </div>
  )
}

export default Book;