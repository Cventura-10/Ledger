import React from 'react';
import './Icon.css';

const Icon = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} className="icon" {...props} />;
};

export default Icon;
