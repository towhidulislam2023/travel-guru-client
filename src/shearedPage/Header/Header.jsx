/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({children}) => {
    return (
        <div className={` flex flex-col md:flex-row justify-between items-center  navbar md:w-[80%] mx-auto pt-10 `}>
           <Link to={"/"}> <div className=" my-2 md:my-0">
               <img className='w-24 ' src="/public/image(1).png" alt="" />
            </div></Link>
                <div className="form-control">
                <input type="text" placeholder="Search" className={`w-80 py-2 px-3 border  rounded-md  bg-transparent  text-lg outline-none 
                ${children = "black" ?"border-black text-black" : "border-white text-white"}   `} />
                </div>
                <div className='md:ml-32 my-2 md:my-0 '>
                    <ul className='flex gap-6 items-center '>
                        <Link to={''}>News</Link>
                        <Link to={''}>Destination</Link>
                        <Link to={''}>Blog</Link>
                        <Link to={''}>Contact</Link>
                    </ul>
                </div>
              <button className="btn btn-warning px-5 py-0 fw-bold text-lg">Login</button>
        
        </div>
    );
};

export default Header;