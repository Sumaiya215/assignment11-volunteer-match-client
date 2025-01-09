import React from 'react';
import errorImage from '../assets/404.webp'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleError = () => {
        navigate(-1)
    }

    const handleError2 = () => {
        navigate('/')
    }
    return (
        <div className='w-1/2 mx-auto  mt-20'>
            <div className='text-center mb-8'>
                <img className='w-1/2 mx-auto ' src={errorImage} alt="" />
            </div>
            <div className='text-center'>
                <button onClick={handleError} className='btn btn-outline btn-primary mr-4'>Go Back</button>
                <button onClick={handleError2} className='btn btn-outline btn-primary'>Back to Home</button>
            </div>


        </div>
    );
};

export default ErrorPage;