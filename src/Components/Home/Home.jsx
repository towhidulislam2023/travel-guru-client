import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FaArrowRight } from 'react-icons/fa';
const Home = () => {
    const priviousdata = {
        "id": 100001,
        "name": "Cox's Bazar",
        "image_url": "https://img.freepik.com/free-photo/overhead-aerial-shot-different-colored-boats-sandy-beach-with-sea-nearby_181624-20946.jpg?w=900&t=st=1682825471~exp=1682826071~hmac=d2e5f5ecad35c90742b76fa106144be71fc1ca1d891cc97bc14d89620ae27f42",
        "description": "Cox's Bazar is a town located in the southeastern part of Bangladesh, known for having the world's longest natural sandy beach, which stretches over 120 km. It's a popular tourist destination for its picturesque scenery, water sports, and seafood."
    }
    const [destinationDescripsion, setDestinationDescription] = useState(priviousdata)
    const destinationdata=useLoaderData()
    console.log(destinationdata);
    const handelSetData=(data)=>{
        setDestinationDescription(data)
    }
    console.log(destinationDescripsion);
    return (
        <div>
            <div className='grid grid-cols-12'>
                <div className=' col-span-4 mt-36 pl-14 pr-7'>
                    <h1 className="text-6xl my-5
                     text-white">{destinationDescripsion.name}</h1>
                    <p className='text-white'>{destinationDescripsion.description}</p>
                    <button className="btn btn-warning my-5"><span className='mr-5'>Booking </span>  <FaArrowRight/></button>
                </div>
                <div className=' col-span-8 my-52 px-5'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        {
                            destinationdata.map(desdata => <SwiperSlide
                                key={desdata.id}
                                 >
                                <div className=' h-fit relative py-0 w-fit'>
                                    <img onClick={() => handelSetData(desdata)} className='w-full' src={desdata.image_url} alt="" />
                                    <h1 className="absolute bottom-0 font-bold text-2xl">{desdata.name}</h1>
                                </div>
                                </SwiperSlide>)
                            
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Home;