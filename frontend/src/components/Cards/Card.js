import React from 'react';
import './Card.css';
import Icon from '../Icons/Icon';

const Card = ({ title, value, icon }) => {
  return (
    <div className="card">
      <div className="card__header">
        <Icon src={icon} alt={title} />
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Card;
