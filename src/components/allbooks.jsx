import React, { useEffect, useState } from 'react'
import Book from './book';
import axios from 'axios';

function Allbooks() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get("/books").then(result=>{
      setData(result)
    }).catch(err=>{
      console.log(err);
    })
  },[])
  console.log(data);
  return (
    <div className='allBooksContainer'>
        <h1>All books </h1>
        
    </div>
  )
}

export default Allbooks