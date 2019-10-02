import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div>
            <h3>404</h3> 
            <p>page not found</p>
            <Link to="/" className="btn-primary">
                return home
                </Link>
        </div>
    );
}

export default Error;