import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import SideBar from './components/sidebar';
function App() {
  return (
    <div className='appContainer'>
      <SideBar />
      <div className='rightContainer'>
        <Routes>
          <Route exact path='/' element={<Home /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
