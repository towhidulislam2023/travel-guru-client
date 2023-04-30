import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelData from '../HotelData/HotelData';
import GoogleMap from '../GoogleMap/GoogleMap';


const Hotel = () => {
    const hotelDatas=useLoaderData()
    return (
        <div className='md:flex'>
           <div className='h-screen md:w-[50%]'>
            <div className='md:p-24 '>
                    {
                        hotelDatas&& hotelDatas.map(hotelData => <HotelData hoteldata={hotelData}  key={hotelData._id }></HotelData>)
                    }
            </div>
           
                {/* <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img  src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-80  rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-xl font-bold">Light bright airy stylish apt & safe
                                peaceful stay</h1>
                            <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <div className='flex justify-around'>
                                <p>retting</p>
                                <p>Price</p>
                            </div>
                        </div>
                    </div>
                </div> */}
           </div>
            <div className='h-screen md:w-[50%]'>
             <GoogleMap></GoogleMap>
           </div>
          
        </div>
    );
};

export default Hotel;