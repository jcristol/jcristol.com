import React from 'react';
import './css/style.css';
import spredfast from './images/spredfast-logo-trans.png'
import longhorn from './images/longhorn.png'


const Meat = () => (
  <div>
    <section class="hero">
      <div class="container">
        <h1 class="hero__title">
          I'm Joshua Cristol, a  
          <a class="hero__link" target="_blank" rel="noopener noreferrer" href="https://github.com/jcristol"> developer </a>
          and
          <a class="hero__link" target="_blank" rel="noopener noreferrer" href="https://github.com/jcristol"> engineer </a>
          living in Austin, Texas.
        </h1>
      </div>
      <div class="container container--wrap hero__container">
        <a target="_blank" rel="noopener noreferrer" href="https://www.cs.utexas.edu/">
          <div class="hero__employer">
            <h4 class="employer__description">I am currently a student of the University of Texas at Austin in the Computer Science School.</h4>
            <h3 class="employer__label">
              Currently
            </h3>
            <img src={longhorn} alt={"logo"}/> 
          </div>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.spredfast.com/">
          <div class="hero__employer">
            <h4 class="employer__description">I am currently a student of the University of Texas at Austin in the Computer Science School.</h4>
            <h3 class="employer__label">
              Previously
            </h3>
            <img src={spredfast} alt={"logo"}/> 
          </div>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.spredfast.com/">
          <div class="hero__employer">
            <h4 class="employer__description">I am currently a student of the University of Texas at Austin in the Computer Science School.</h4>
            <h3 class="employer__label">
              Working On
            </h3>
            <img src={spredfast} alt={"logo"}/> 
          </div>
        </a>
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
            <a target="_blank" rel="noopener noreferrer" class="work__list-item-link" href="https://www.spredfast.com/">
              <h2 class="work-title">
                Spredfast
              </h2>
              <span class="work-detail work-role">
                Backend Dev Intern
              </span>
              <span class="work-detail work-company">
                spredfast.com
              </span>
              <span class="work-detail work-date">
                2017
              </span>
            </a>
          </li>
          <li class="work__list-item">
            <a target="_blank" rel="noopener noreferrer" class="work__list-item-link" href="https://www.verizon.com">
              <h2 class="work-title">
                Verizon
              </h2>
              <span class="work-detail work-role">
                Network Engineering Intern
              </span>
              <span class="work-detail work-company">
                verizon.com
              </span>
              <span class="work-detail work-date">
                2015
              </span>
            </a>
          </li>
          <li class="work__list-item">
            <a target="_blank" rel="noopener noreferrer" class="work__list-item-link" href="http://www.elbitsystems-us.com">
              <h2 class="work-title">
                Elbit Systems of Americaa
              </h2>
              <span class="work-detail work-role">
                Software Engineering Intern
              </span>
              <span class="work-detail work-company">
                elbitsystems-us.com
              </span>
              <span class="work-detail work-date">
                2014
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
            <a target="_blank" rel="noopener noreferrer" class="work__list-item-link" href="">
              <h2 class="work-title">
                NFL Database
              </h2>
              <span class="work-detail work-role">
                Backend Developer and Ops
              </span>
              <span class="work-detail work-company">
                Software Engineering Final Project
              </span>
              <span class="work-detail work-date">
                2017
              </span>
            </a>
          </li>
          <li class="work__list-item">
            <a target="_blank" rel="noopener noreferrer" class="work__list-item-link" href="">
              <h2 class="work-title">
                Particle and Fluid Simulator
              </h2>
              <span class="work-detail work-role">
                Project Collaborator
              </span>
              <span class="work-detail work-company">
                Graphics Class Final Project
              </span>
              <span class="work-detail work-date">
                2017
              </span>
            </a>
          </li>
          <li class="work__list-item">
            <a target="_blank" rel="noopener noreferrer" class="work__list-item-link" href="">
              <h2 class="work-title">
                Texas Guadaloop
              </h2>
              <span class="work-detail work-role">
                Head Electrical Engineer
              </span>
              <span class="work-detail work-company">
                Final Hyperloop Pod PCB
              </span>
              <span class="work-detail work-date">
                2015-2017
              </span>
            </a>
          </li>
          <li class="work__list-item">
            <a target="_blank" rel="noopener noreferrer" class="work__list-item-link" href="">
              <h2 class="work-title">
                JS Project
              </h2>
              <span class="work-detail work-role">
                Top Dog
              </span>
              <span class="work-detail work-company">
                Bored Winter Break
              </span>
              <span class="work-detail work-date">
                2017
              </span>
            </a>
          </li>
          <li class="work__list-item">
            <a target="_blank" rel="noopener noreferrer" class="work__list-item-link" href="">
              <h2 class="work-title">
                JS Project
              </h2>
              <span class="work-detail work-role">
                Top Dog
              </span>
              <span class="work-detail work-company">
                Bored Winter Break
              </span>
              <span class="work-detail work-date">
                2017
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
);

export default Meat;
