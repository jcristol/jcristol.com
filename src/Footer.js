import React from 'react';
import './css/style.css';

const Footer = () => (
  <footer id="contact" class="footer">
    <div class="container">
      <h2 class="secondary-header">
        Looking to start a project?
        <a class="hero__link" href="mailto: drdestefanis@gmail.com">Let's talk.</a>
      </h2>
    </div>
    <div class="container">
      <ul class="social-list">
        <li class="social-list__item">
          <a href="https://dribbble.com/danielrd/click?type=instagram" class="social-list__item-link">
            Instagram
          </a>
        </li>
        <li class="social-list__item">
          <a href="https://github.com/destefanis" class="social-list__item-link">
            GitHub
          </a>
        </li>
        <li class="social-list__item">
          <a href="http://codepen.io/destefanis/" class="social-list__item-link">
            Codepen
          </a>
        </li>
        <li class="social-list__item">
          <a href="https://www.linkedin.com/in/danielrd" class="social-list__item-link">
            LinkedIn
          </a>
        </li>
        <li class="social-list__item">
          <a href="mailto: drdestefanis@gmail.com" class="social-list__item-link">
            Email
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;