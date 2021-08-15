import React from 'react';

import desktopImg from '../assets/images/bg-header-desktop.svg';
import mobileImg from '../assets/images/bg-header-mobile.svg';

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__image header__image--desktop"
        src={desktopImg}
        alt="bg-header desktop"
      />
      <img
        className="header__image header__image--mobile"
        src={mobileImg}
        alt="bg-header mobile"
      />
    </header>
  );
};

export default Header;
