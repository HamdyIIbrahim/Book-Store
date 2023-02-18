import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Allbooks from './components/allbooks';
import Favbooks from './components/favbooks';
import Home from './components/home';
import Savedbooks from './components/savedbooks';
import SideBar from './components/sidebar';
function App() {
  return (
    <div className='appContainer'>
      <SideBar />
      <div className='rightContainer'>
        <Routes>
          <Route exact path='/' element={<Home /> } />
          <Route path='/allbooks' element={<Allbooks /> } />
          <Route path='/saved' element={<Savedbooks /> } />
          <Route path='/favs' element={<Favbooks /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
