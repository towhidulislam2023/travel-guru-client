import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../shearedPage/Header/Header';

const ThirdLayout = () => {
    return (
        <div className='bg-white h-screen'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default ThirdLayout;