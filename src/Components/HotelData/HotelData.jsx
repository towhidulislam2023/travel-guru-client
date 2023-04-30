/* eslint-disable react/prop-types */
import React from 'react';
import { FaDraftingCompass, FaStar } from 'react-icons/fa';

const HotelData = ({ hoteldata }) => {
    const { _id, name, description, price, rating, image, address } = hoteldata
    return (

        <div className="hero my-5 rounded-lg  bg-base-200">
                    <div className="hero-content  flex-col lg:flex-row">
                <img src={image} className="w-64  rounded-lg shadow-2xl" />
                        <div>
                    <h1 className="text-xl font-bold">{name}</h1>
                            <p className=' text-md'>4 guests   2 bedrooms   2 beds   2 baths</p>
                            <p className="py-6">{description}</p>
                            <div className='flex justify-around items-center'>
                                <div className='flex gap-5 items-center'>
                            <FaStar className='text-2xl text-yellow-500'></FaStar> <p className='text-xl font-bold'>{rating}</p>
                                </div>
                        <p>Price: <span className='text-xl font-bold text-yellow-900'>{price}</span> /night</p>
                            </div>
                    <p className='text-md my-2'>Address: {address.street} {address.city}</p>
                        </div>
                    </div>
                </div> 
    );
};

export default HotelData;