import React from 'react'

import { routes } from '../../constants'
import cart from '../../assets/shoppingCarticon.png'
import logo from '../../assets/logo.png'
import profile from '../../assets/profileImage.png'

import './navBarSection.css'

export const NavbarSection: React.FC = () =>
  <nav className="navBar">
    <div>
      <img src={logo} alt="Moka Coffee" width="36" height="29" />
    </div>
    <div className="topNavWrapper">
      <ul className="topNav" id="navbar-toggle">
        <li className="dropDownLink">
          <a>&#9776;</a>
        </li>
        {Object.entries(routes).map(([name, link]) =>
          <li key={name} className="list"><a className="navLink" href={link}>{(name.replaceAll('_', ' '))}</a></li>
        )}
      </ul>
    </div>
    <div className="profile">
      <img src={cart} className='cart-img' alt="Moka Coffee" />
      <img src={profile} className='profile-img' alt="Moka Coffee" />
    </div>
  </nav>
