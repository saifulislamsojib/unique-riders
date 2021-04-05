import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {

    const history = useHistory();
    const handleGoToHome = () => {
        history.push('/');
    }

    return (
        <div className='text-center text-danger mt-5'>
            <h1>Not Found</h1>
            <h2>404 Error</h2>
            <button onClick={handleGoToHome} className='btn btn-warning mt-2'>GO To Home</button>
        </div>
    );
};

export default NotFound;