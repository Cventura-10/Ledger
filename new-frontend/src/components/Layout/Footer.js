import React from 'react';
import { colors, typography } from '../../designSystem';
import './Footer.css';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: colors.primary,
        color: colors.text,
        fontFamily: typography.fontFamily,
        fontWeight: typography.fontWeights.regular,
        padding: '16px',
        textAlign: 'center',
      }}
    >
      <p>© 2023 Ledger App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
