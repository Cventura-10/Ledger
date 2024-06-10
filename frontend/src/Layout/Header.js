import React from 'react';
import './Header.css';
import Logo from '../components/Icons/Icon';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo src="/assets/Icons/accounting.svg" alt="Logo" />
        <h1>Ledger App</h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Sales</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
