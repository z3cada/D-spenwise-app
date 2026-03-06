import React from 'react';
import './Card.css';

const Card = ({ children, className = '', noPadding = false }) => {
    return (
        <div className={`custom-card ${noPadding ? 'no-padding' : ''} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
