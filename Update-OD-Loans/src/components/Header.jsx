import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ toggleMobileMenu }) => {
  return (
    <div className="header">
      <button
        className="menu-toggle"
        onClick={toggleMobileMenu}
      >
        <Menu size={24} />
      </button>
      
      <div className="user-avatar">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23e0e0e0'/%3E%3Ccircle cx='20' cy='15' r='5' fill='%23999'/%3E%3Cpath d='M8 32c0-6.627 5.373-12 12-12s12 5.373 12 12' fill='%23999'/%3E%3C/svg%3E"
          alt="User"
        />
      </div>
    </div>
  );
};

export default Header;