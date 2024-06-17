import React from 'react';
import { colors, typography } from '../designSystem';
import dashboardIcon from '../assets/icons/dashboard-icon.svg';
import salesIcon from '../assets/icons/sales-icon.svg';
import productIcon from '../assets/icons/product-icon.svg';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav
      style={{
        backgroundColor: colors.primary,
        color: colors.text,
        fontFamily: typography.fontFamily,
        fontWeight: typography.fontWeights.regular,
        padding: '16px',
      }}
    >
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginBottom: '8px' }}>
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
        <li style={{ marginBottom: '8px' }}>
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
        <li>
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
  );
};

export default NavBar;
