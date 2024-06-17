// src/components/Cards/Card.js
import React from 'react';
import { colors, typography } from '../../designSystem';
import './Card.css';

const Card = ({ title, children, ...props }) => {
  return (
    <div
      style={{
        backgroundColor: colors.primary,
        color: colors.text,
        fontFamily: typography.fontFamily,
        fontWeight: typography.fontWeights.regular,
        borderRadius: '4px',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
      {...props}
    >
      <h3
        style={{
          backgroundColor: colors.secondary,
          color: colors.text,
          fontFamily: typography.fontFamily,
          fontWeight: typography.fontWeights.bold,
          borderRadius: '4px',
          padding: '8px 16px',
          marginTop: 0,
        }}
      >
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;
