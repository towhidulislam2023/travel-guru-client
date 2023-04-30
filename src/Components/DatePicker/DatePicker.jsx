import React, { useContext } from 'react';
import PlaceDescription from '../../shearedPage/PlaceDescription/PlaceDescription';
import { destinationDataContext } from '../../Provider/DataProvider';
import {
    RangeDatePicker,
    SingleDatePicker
} from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import { Link } from 'react-router-dom';
const DatePicker = () => {
    const [destinationDescripsion, setDestinationDescription] = useContext(destinationDataContext)
    return (
        <div>
            <div className='grid md:grid-cols-12'>
                <div className=' col-span-4 md:mt-36 pl-14 pr-7'>
                    <PlaceDescription destinationDescripsion={destinationDescripsion}></PlaceDescription>

                </div>
                <div className=' col-span-8 my-32 px-5 mx-auto'>
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p>Origin</p>
                            <select className="select select-info w-full max-w-xs">
                                defaultValue={"Dhaka"}
                                <option>Chittagong</option>
                                <option>India</option>
                            </select>
                            <p>Destination</p>
                            <select className="select select-info w-full max-w-xs" defaultValue={destinationDescripsion?.name}>
                                <option disabled>{destinationDescripsion?.name}</option>
                                <option>Dhaka</option>
                                <option>Chittagong</option>
                                <option>India</option>
                            </select>
                            <div className='w-fit'>
                                <RangeDatePicker
                                    startDate={new Date(2020, 0, 15)}
                                    endDate={new Date(2020, 1, 1)}
                                    startDatePlaceholder="From"
                                    endDatePlaceholder="To"
                                    highlightToday
                                />
                            </div>
                            <Link to={`/hotel/${destinationDescripsion?.id}`}> <button className="btn w-[100%] btn-warning block mx-auto my-6">Start Booking</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DatePicker;