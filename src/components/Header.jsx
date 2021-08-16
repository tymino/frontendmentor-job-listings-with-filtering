import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__image header__image--desktop"
        src='./assets/images/bg-header-desktop.svg'
        alt="bg-header desktop"
      />
      <img
        className="header__image header__image--mobile"
        src='./assets/images/bg-header-mobile.svg'
        alt="bg-header mobile"
      />
    </header>
  );
};

export default Header;
