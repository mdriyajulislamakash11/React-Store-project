import React from 'react';

const Heading = ({title, description}) => {
    return (
        <div className='flex flex-col my-12 justify-center items-center'>
            <h2 className='text-xl md:text-2xl lg:text-4xl font-thin mb-4'>{title}</h2>
            <p className='text-xs md:text-base text-gray-600 font-thin'>{description}</p>
        </div>
    );
};

export default Heading;