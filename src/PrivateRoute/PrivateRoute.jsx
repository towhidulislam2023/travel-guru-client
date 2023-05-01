/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthProviderContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location=useLocation()
    const { user, loading }=useContext(AuthProviderContext)
    if (loading) {
        return <p>Loading....</p>
        
    }
    if (user) {
        return  children 
        
    }
    return (
        <Navigate to={"/authentication/login"} state={location} replace>

        </Navigate>
    );
};

export default PrivateRoute;