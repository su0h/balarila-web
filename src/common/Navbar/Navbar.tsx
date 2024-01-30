import React, { FC } from 'react';
import { BalarilaLogo, BalarilaBG } from '../../assets';

const Navbar: FC = () => {
  return (
    <div>
      <img src={BalarilaBG} />
      <img src={BalarilaLogo} />
      <nav className="navbar">
        <a href="/" className="balarila-title">
          Balarila
        </a>
        <ul>
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
