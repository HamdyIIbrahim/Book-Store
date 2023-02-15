import React from 'react';
import { Routes } from 'react-router-dom';
import Book from './components/book';
import BookShelf from './components/bookshelf';
import Nav from './components/nav'
import SideBar from './components/sidebar';
function App() {
  return (
    <div className='appContainer'>
      <SideBar />
      <Nav />
      <h3>happy reading ,Harvey</h3>
      <p>It was one of the most searing images of the twentieth century: two young boys, two princes, walking behind their mother’s coffin as the world watched in sorrow—and horror. As Princess Diana was laid to rest, billions wondered what Prince William and Prince Harry must be thinking and feeling—and how their lives would play out from that point on.</p>
      <BookShelf />
    </div>
  );
}

export default App;
