import React from 'react';
import Header from '../../shearedPage/Header/Header';
import { Outlet } from 'react-router-dom';

const SecondaryLayout = () => {
    return (
        <div className='bg-white h-screen'>
        <Header ></Header>
        <hr className='border border-black w-[80%] mx-auto' />
        <Outlet></Outlet>
            
        </div>
    );
};

export default SecondaryLayout;