import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const Root = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default Root;