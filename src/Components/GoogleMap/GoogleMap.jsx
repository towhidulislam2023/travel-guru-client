import React from 'react';

const GoogleMap = () => {
    return (
        <div className='pt-24 rounded-lg'>
            <iframe  className='rounded-lg w-[300px] mx-auto h-[400px] md:w-[700px] md:h-[900px]'
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.451389475847!2d-118.41173278558692!3d34.06359528059738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27f2ff%3A0x3e3c53944e843e19!2sThe%20Hollywood%20Museum!5e0!3m2!1sen!2sus!4v1621426862629!5m2!1sen!2sus"
                // width="700"
                // height="900"
                allowFullScreen=""
                loading="lazy"
            ></iframe>

        </div>
    );
};

export default GoogleMap;