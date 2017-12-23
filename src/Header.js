import React from 'react';
import './css/style.css';
import logo from './images/Logo1.png'

const Header = () => (
  <nav class="nav">
    <div class="container container--vertically-center">
      <div class="nav__brand">
        <a href="">
          <img src={logo} alt={"logo"}/> 
        </a>
      </div>
      <ul class="nav__list">
        <li class="nav__list-item">
          <a data-scroll href="#work">Work</a>
        </li>
        <li class="nav__list-item">
          <a data-scroll href="#projects">Projects</a>
        </li>
        <li class="nav__list-item">
          <a data-scroll href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;