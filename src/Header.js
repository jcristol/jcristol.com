import React from 'react';
import './css/style.css';

const Header = () => (
  <nav class="nav">
    <div class="container container--vertically-center">
      <div class="nav__brand">
        <a href="http://danielrd.com">
          @include("logo.svg")
        </a>
      </div>
      <ul class="nav__list">
        <li class="nav__list-item">
          <a data-scroll href="#work">Work</a>
        </li>
        <li class="nav__list-item">
          <a data-scroll href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;