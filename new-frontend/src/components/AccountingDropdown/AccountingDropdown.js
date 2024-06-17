// src/components/AccountingDropdown/AccountingDropdown.js
import React from 'react';
import { colors, typography } from '../../designSystem';
import './AccountingDropdown.css';

const AccountingDropdown = ({ options, ...props }) => {
  return (
    <select
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
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default AccountingDropdown;
