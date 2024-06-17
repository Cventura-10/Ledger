// src/components/Buttons/Button.js
import React from 'react';
import { colors, typography } from '../../designSystem';
import './Button.css';

const Button = ({ children, ...props }) => {
  return (
    <button
      style={{
        backgroundColor: colors.primary,
        color: colors.text,
        fontFamily: typography.fontFamily,
        fontWeight: typography.fontWeights.regular,
        borderRadius: '4px',
        padding: '8px 16px',
        border: 'none',
        cursor: 'pointer',
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
