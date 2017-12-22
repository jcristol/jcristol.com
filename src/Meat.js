import React from 'react';
import './css/style.css';
import spredfast from './images/spredfast-logo.jpg'


const Meat = () => (
  <div>
    <section class="hero">
      <div class="container">
        <h1 class="hero__title">
          My name is Joshua Cristol, a  
          <a class="hero__link" target="_blank" href="https://github.com/jcristol"> developer </a>
          and
          <a class="hero__link" target="_blank" href="https://github.com/jcristol"> engineer </a>
          living in Austin, Texas.
        </h1>
      </div>
      <div class="container container--wrap">
        <div class="hero__employer hero__employer--steelseries">
          <h3 class="employer__label">
            Currently:
          </h3>
          <a target="_blank" href="https://www.spredfast.com/">
            <img src={spredfast} alt={"logo"}/> 
          </a>
        </div>
        <div class="hero__employer">
          <h3 class="employer__label">
            Previously:
          </h3>
          <a target="_blank" href="https://www.spredfast.com/">
            <img src={spredfast} alt={"logo"}/> 
          </a>
        </div>
      </div>
    </section>

    <section id="work" class="work">
      <div class="container">
        <h2 class="secondary-header">
          Work
        </h2>
      </div>
      <div class="work-container">
        <ul class="work__list">
          <li class="work__list-item">
            <a target="_blank" class="work__list-item-link" href="http://artgallery.yale.edu/collection/search">
              <h2 class="work-title">
                Yale University Art Gallery
              </h2>
              <span class="work-detail work-role">
                UX
              </span>
              <span class="work-detail work-company">
                Palantir.net
              </span>
              <span class="work-detail work-date">
                2015
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section id="projects" class="work">
      <div class="container">
        <h2 class="secondary-header">
          Projects
        </h2>
      </div>
      <div class="work-container">
        <ul class="work__list">
          <li class="work__list-item">
            <a target="_blank" class="work__list-item-link" href="http://artgallery.yale.edu/collection/search">
              <h2 class="work-title">
                Yale University Art Gallery
              </h2>
              <span class="work-detail work-role">
                UX
              </span>
              <span class="work-detail work-company">
                Palantir.net
              </span>
              <span class="work-detail work-date">
                2015
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
);

export default Meat;