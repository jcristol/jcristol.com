import React, { Component } from 'react';
import './css/style.css';
import Header from './Header';
import Meat from './Meat';
import Footer from './Footer';
import Blog from './Blog';
import { Route, Switch } from 'react-router';

var blog1 = require("./blog/Understanding Systems of Ethics.md")
var blog2 = require("./blog/A Jury Of Her Peers.md")
var blog3 = require("./blog/Alice Corp vs. Cls.md")
var blog4 = require("./blog/Blog4.md")
var blog5 = require("./blog/Blog5.md")

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/blog1' render={() => <Blog id="1" post={blog1}/>}/>
        <Route path='/blog2' render={() => <Blog id="1" post={blog2}/>}/>
        <Route path='/blog3' render={() => <Blog id="1" post={blog3}/>}/>
        <Route path='/blog4' render={() => <Blog id="1" post={blog4}/>}/>
        <Route path='/blog5' render={() => <Blog id="1" post={blog5}/>}/>
        <Route path='/'component={PersonalSite}/>
      </Switch>
    );
  }
}

const PersonalSite = () => (
  <div>
    <Header />
    <Meat />
    <Footer />
  </div>
); 

export default App;
