import React from 'react';
import { colors, typography } from '../designSystem';
import dashboardIcon from '../assets/icons/dashboard-icon.svg';
import salesIcon from '../assets/icons/sales-icon.svg';
import productIcon from '../assets/icons/product-icon.svg';
import './Header.css';

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: colors.primary,
        color: colors.text,
        fontFamily: typography.fontFamily,
        fontWeight: typography.fontWeights.regular,
        padding: '16px',
      }}
    >
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginRight: '16px', display: 'inline-block' }}>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                color: colors.text,
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <img src={dashboardIcon} alt="Dashboard" style={{ marginRight: '8px' }} />
              Dashboard
            </button>
          </li>
          <li style={{ marginRight: '16px', display: 'inline-block' }}>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                color: colors.text,
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <img src={salesIcon} alt="Sales" style={{ marginRight: '8px' }} />
              Sales
            </button>
          </li>
          <li style={{ display: 'inline-block' }}>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                color: colors.text,
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <img src={productIcon} alt="Products" style={{ marginRight: '8px' }} />
              Products
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
