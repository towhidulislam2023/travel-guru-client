import React, { useContext, useState } from 'react';
import { Link, Navigate, useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FaArrowRight } from 'react-icons/fa';
import PlaceDescription from '../../shearedPage/PlaceDescription/PlaceDescription';
import { destinationDataContext } from '../../Provider/DataProvider';
const Home = () => {
    // const [destinationDescripsion, setDestinationDescription] = useState(priviousdata)
    const [destinationDescripsion, setDestinationDescription] = useContext(destinationDataContext)
    const destinationdata = useLoaderData()
    const handelSetData = (data) => {
        setDestinationDescription(data)
    }
    return (
        <div>
            <div className='grid md:grid-cols-12'>
                <div className='col-span-12  md:col-span-4 md:mt-36 md:pl-14 md:pr-7 px-5' >
                    <PlaceDescription destinationDescripsion={destinationDescripsion}><button className="btn btn-warning my-5"><span className='mr-5'>Booking </span>  <FaArrowRight /></button></PlaceDescription>

                </div>
                <div className=' hidden md:block col-span-12 md:col-span-8 md:my-52 md:px-5'>
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
                            destinationdata && destinationdata.map(desdata => <SwiperSlide
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
                <div className='md:hidden'>
                    <h1 className='text-5xl text-white text-center'>Palces:</h1>
                    <div className=' w-[90%] mx-auto '>
                        {
                            destinationdata && destinationdata.map(desdata => <Link to={"/datePick"} key={desdata.id}><div key={desdata.id} className=' relative py-0 w-[23rem] my-5'>
                                <img onClick={() => handelSetData(desdata)} className='w-full' src={desdata.image_url} alt="" />
                                <h1 className="absolute bottom-0 font-bold text-2xl">{desdata.name}</h1>
                            </div></Link>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;