import Register from '@/src/components/Register';
import React from 'react';

const page = () => {
    return (
        <div className='xl:w-360 mx-auto '>
            <div className='flex xl:mt-9.5 xl:ml-30.25 gap-3 text-gray-500 xl:w-83.75 xl:h-5.25 xl:mb-18.25'>
                <h1>Account</h1>
                <span>/</span>
                <h1>Register</h1>
            </div>
            <Register></Register>
        </div>
    );
};

export default page;