import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar w-[80%] mx-auto">
            <div className="flex-1">
               <img className='w-24 ' src="/public/image(1).png" alt="" />
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className=" w-80 py-2 px-3 border  rounded-md border-white bg-transparent text-white text-lg outline-none  " />
                </div>
                <div className='ml-32'>
                    <ul className='flex gap-6 items-center text-white'>
                        <Link to={''}>News</Link>
                        <Link to={''}>Destination</Link>
                        <Link to={''}>Blog</Link>
                        <Link to={''}>Contact</Link>
                    </ul>
                </div>
                <button className='btn btn-secondary ml-6'>Login</button>
            </div>
        </div>
    );
};

export default Header;