import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Error = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { link, error } = location.state || { link: '/', error: 'An unknown error occurred' };

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(link);
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate, link]);

    return (
        <div>
            <h1>{error}</h1>
            <p>Redirecting in 3 seconds...</p>
        </div>
    );
};

export default Error;
