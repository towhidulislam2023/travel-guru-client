/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProviderContext } from '../../Provider/AuthProvider';

const Header = ({children}) => {
    const { user, logout }=useContext(AuthProviderContext)
    const handelLogOut=()=>{
        logout()
    }
    return (
        <div className='bg-slate-50 bg-opacity-10'>
        <div className={`  flex flex-col md:flex-row justify-between items-center  navbar md:w-[80%] mx-auto pt-10 `}>
           <Link to={"/"}> <div className=" my-2 md:my-0">
                    <img className='w-24 ' src="https://i.ibb.co/q0FjhMz/logoedit.png" alt="" />
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
                    <p className='hidden md:block'>{user && user.email}</p>
                    </ul>
                </div>
           {
                user ? <Link to={"/"}>   <button onClick={handelLogOut} className="btn btn-warning px-5 py-0 fw-bold text-lg">Logout</button>
                </Link> : <Link to={"/authentication/login"}>   <button className="btn btn-warning px-5 py-0 fw-bold text-lg">Login</button>
                </Link>
           }
                <p className='md:hidden block text-white my-2'>{user && user.email}</p>
        
        </div>
        </div>
    );
};

export default Header;