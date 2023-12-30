import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../nav-bar';

function MainPages() {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
    
  );
}

export default MainPages;
