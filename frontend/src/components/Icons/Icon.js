import React from 'react';
import './Icon.css';

const Icon = ({ iconName }) => {
    return (
        <span className={`icon ${iconName}`}></span>
    );
}

export default Icon;
