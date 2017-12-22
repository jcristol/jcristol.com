import React from 'react';
import './css/style.css';

const Footer = () => (
  <footer id="contact" class="footer">
    <div class="container">
      <h2 class="secondary-header">
        Looking to start a project?
        <a class="hero__link" href="mailto: joshcristol@gmail.com"> Let's talk. </a>
      </h2>
    </div>
    <div class="container">
      <ul class="social-list">
        <li class="social-list__item">
          <a href="" class="social-list__item-link">
            Download Resume
          </a>
        </li>
        <li class="social-list__item">
          <a href="mailto: joshcristol@gmail.com" class="social-list__item-link">
            Email
          </a>
        </li>
        <li class="social-list__item">
          <a href="https://github.com/jcristol" class="social-list__item-link">
            GitHub
          </a>
        </li>
        {/* linkdin profile */}
      </ul>
    </div>
  </footer>
);

export default Footer;