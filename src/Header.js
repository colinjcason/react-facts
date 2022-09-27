import React from 'react'
import logo from './logo.svg';

import './App.css'

const Header = () => {
  return (
    <nav className='navBar'>
      <img src={logo} alt='logo' className='logo'/>
      <h3>ReactFacts</h3>
      <ul className='nav-items'>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Header