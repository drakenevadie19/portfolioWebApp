import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../nav-bar';
import CopyRight from './copyright-component';

function MainPages() {
  return (
    <>
      <div className='main'>
        <div>
          <Navbar />
          <Outlet />
        </div>
        <CopyRight />
      </div>
    </>
    
  );
}

export default MainPages;
