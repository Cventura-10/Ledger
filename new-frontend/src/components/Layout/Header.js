import React from 'react';
import { colors, typography } from '../../designSystem';
import dashboardIcon from '../../assets/icons/dashboard-icon.svg';
import salesIcon from '../../assets/icons/sales-icon.svg';
import productIcon from '../../assets/icons/product-icon.svg';
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
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '16px', margin: 0, padding: 0 }}>
          <li style={{ display: 'flex', alignItems: 'center' }}>
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
              <img src={dashboardIcon} alt="Dashboard" style={{ marginRight: '8px', height: '24px' }} />
              Dashboard
            </button>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
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
              <img src={salesIcon} alt="Sales" style={{ marginRight: '8px', height: '24px' }} />
              Sales
            </button>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
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
              <img src={productIcon} alt="Products" style={{ marginRight: '8px', height: '24px' }} />
              Products
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
