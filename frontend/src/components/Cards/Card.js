import React from 'react';
import './Card.css';

const Card = ({ title, content }) => {
    return (
        <div className="card">
            <div className="card-header"> {/* Light Blue header */}
                {title}
            </div>
            <div className="card-content">
                {content}
            </div>
        </div>
    );
}

export default Card;
