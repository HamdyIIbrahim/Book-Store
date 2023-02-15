import React from 'react'

function Book() {
  return (
    <div className='bookContainer'>
        <img className='bookImg' src={require('../assets/book 1.jpeg')} alt="book" />
        <h5>The Psychology of Harry Potter</h5>
    </div>
  )
}

export default Book;