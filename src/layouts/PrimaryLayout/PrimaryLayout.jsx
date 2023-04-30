import React from 'react';
import Header from '../../shearedPage/Header/Header';
import { Outlet } from 'react-router-dom';

const PrimaryLayout = () => {
    return (
        <div className='main-bg'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default PrimaryLayout;