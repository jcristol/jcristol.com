import React from 'react';
import './css/style.css';

const Meat = () => (
  <div>
    <section class="hero">
      <div class="container">
        <h1 class="hero__title">
          My name is Joshua Cristol, a  
          <a class="hero__link" target="_blank" href="https://github.com/destefanis"> developer </a>
          living in Austin, Texas.
        </h1>
      </div>
      <div class="container container--wrap">
        <div class="hero__employer hero__employer--steelseries">
          <h3 class="employer__label">
            Currently:
          </h3>
          <a target="_blank" href="https://steelseries.com">
            @include("ss-logo.svg")
          </a>
        </div>
        <div class="hero__employer">
          <h3 class="employer__label">
            Previously:
          </h3>
          <a target="_blank" href="https://palantir.net">
            @include("palantir.svg")
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
          <li class="work__list-item work__list-item--first">
            <a target="_blank" class="work__list-item-link" href="https://pwlarue.com">
              <h2 class="work-title">
                P.W. LaRue Co.
              </h2>
              <span class="work-detail work-role">
                Design, Development, UX
              </span>
              <span class="work-detail work-company">
                Freelance
              </span>
              <span class="work-detail work-date">
                April 2017
              </span>
            </a>
          </li>
          <li class="work__list-item">
            <a target="_blank" class="work__list-item-link" href="https://dribbble.com/shots/3007383-Wedding-Website-Work-Page">
              <h2 class="work-title">
                Graham Buss Photography
              </h2>
              <span class="work-detail work-role">
                Development, Design, UX
              </span>
              <span class="work-detail work-company">
                Freelance
              </span>
              <span class="work-detail work-date">
                Soon
              </span>
            </a>
          </li>
          <li class="work__list-item">
            <a target="_blank" class="work__list-item-link" href="https://dribbble.com/shots/3159772-Custom-Mousepad-Maker-UI">
              <h2 class="work-title">
                Custom Mousepad Maker
              </h2>
              <span class="work-detail work-role">
                Design, UI
              </span>
              <span class="work-detail work-company">
                Freelance
              </span>
              <span class="work-detail work-date">
                2016
              </span>
            </a>
          </li>
          <li class="work__list-item">
            <a target="_blank" class="work__list-item-link" href="https://steelseries.com/gaming-headsets/arctis">
              <h2 class="work-title">
                Arctis Launch
              </h2>
              <span class="work-detail work-role">
                Development, Design, UX
              </span>
              <span class="work-detail work-company">
                SteelSeries
              </span>
              <span class="work-detail work-date">
                2016
              </span>
            </a>
          </li>
          <li class="work__list-item">
            <a target="_blank" class="work__list-item-link" href="https://steelseries.com">
              <h2 class="work-title">
                SteelSeries
              </h2>
              <span class="work-detail work-role">
                Development, Design, UX
              </span>
              <span class="work-detail work-company">
                SteelSeries
              </span>
              <span class="work-detail work-date">
                Ongoing
              </span>
            </a>
          </li>
          <li class="work__list-item">
            <a target="_blank" class="work__list-item-link" href="http://palantirnet.github.io/argonne/">
              <h2 class="work-title">
                Argonne
              </h2>
              <span class="work-detail work-role">
                Project Lead, Development
              </span>
              <span class="work-detail work-company">
                Palantir.net
              </span>
              <span class="work-detail work-date">
                2015
              </span>
            </a>
          </li>
          <li class="work__list-item">
            <a target="_blank" class="work__list-item-link" href="https://www.palantir.net/experience/resources-future">
              <h2 class="work-title">
                Resources For The Future
              </h2>
              <span class="work-detail work-role">
                Development
              </span>
              <span class="work-detail work-company">
                Palantir.net
              </span>
              <span class="work-detail work-date">
                2015
              </span>
            </a>
          </li>
          <li class="work__list-item">
            <a target="_blank" class="work__list-item-link" href="https://www.palantir.net/experience/foreign-affairs">
              <h2 class="work-title">
                Foreign Affairs
              </h2>
              <span class="work-detail work-role">
                Development, Design
              </span>
              <span class="work-detail work-company">
                Palantir.net
              </span>
              <span class="work-detail work-date">
                2015
              </span>
            </a>
          </li>
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