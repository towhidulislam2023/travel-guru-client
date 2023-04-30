import React, { createContext, useState } from 'react';
// eslint-disable-next-line react-refresh/only-export-components
export const destinationDataContext=createContext(null)
// eslint-disable-next-line react/prop-types
const DataProvider = ({children}) => {
    const priviousdata = {
        "id": 100001,
        "name": "Cox's Bazar",
        "image_url": "https://img.freepik.com/free-photo/overhead-aerial-shot-different-colored-boats-sandy-beach-with-sea-nearby_181624-20946.jpg?w=900&t=st=1682825471~exp=1682826071~hmac=d2e5f5ecad35c90742b76fa106144be71fc1ca1d891cc97bc14d89620ae27f42",
        "description": "Cox's Bazar is a town located in the southeastern part of Bangladesh, known for having the world's longest natural sandy beach, which stretches over 120 km. It's a popular tourist destination for its picturesque scenery, water sports, and seafood."
    }
    const [destinationDescripsion, setDestinationDescription] = useState(priviousdata)
    return (
        <destinationDataContext.Provider value={[destinationDescripsion, setDestinationDescription]}>
            {children}
        </destinationDataContext.Provider>
    );
};

export default DataProvider;