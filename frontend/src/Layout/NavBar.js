import React from 'react';
import './NavBar.css';
import Icon from '../components/Icons/Icon';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <Icon src="/assets/Icons/Dashboard.svg" alt="Dashboard" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <Icon src="/assets/Icons/product.svg" alt="Products" />
            <span>Products</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <Icon src="/assets/Icons/Sales.svg" alt="Sales" />
            <span>Sales</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <Icon src="/assets/Icons/accounting.svg" alt="Accounting" />
            <span>Accounting</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <Icon src="/assets/Icons/Setting.svg" alt="Settings" />
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
