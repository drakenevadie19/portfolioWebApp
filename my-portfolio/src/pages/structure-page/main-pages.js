import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../nav-bar';
function MainPages() {
  return (
    <>
      <div className='main'>
        <div>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
    
  );
}

export default MainPages;
