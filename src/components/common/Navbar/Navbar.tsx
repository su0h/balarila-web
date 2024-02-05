import React, { FC } from 'react';

import './Navbar.scss';
import { BalarilaLogo } from '../../../assets';

const Navbar: FC = () => {
  return (
    <div className="balarila-navbar">
      <nav>
        <ul>
          <li>
            <a href="/">
              <img className="balarila-navbar__logo" src={BalarilaLogo} />
            </a>
          </li>

          <li>
            <a href="/"> Home </a>
          </li>
          <li>
            <a href="/Balarila"> Balarila </a>
          </li>
          <li>
            <a href="/Corruption"> Corruption </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
