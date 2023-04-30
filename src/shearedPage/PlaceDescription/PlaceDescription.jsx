/* eslint-disable react/prop-types */
import React, {  } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PlaceDescription = ({ destinationDescripsion,children}) => {
    return (
        <div>
            <h1 className="text-6xl my-5
                     text-white">{destinationDescripsion.name}</h1>
            <p className='text-white'>{destinationDescripsion.description}</p>
            <Link to={'/datePick'}>{children}</Link>  
        </div>
    );
};

export default PlaceDescription;