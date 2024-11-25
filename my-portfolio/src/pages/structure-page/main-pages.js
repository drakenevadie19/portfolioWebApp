import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navigation-bar/nav-bar';
function MainPages() {
  return (
    <>
      <div className='main'>
          <Navbar />
          <Outlet />
      </div>
    </>
    
  );
}

export default MainPages;
