import React, { Component } from 'react';
import './css/style.css';
import Header from './Header';
import Meat from './Meat';
import Footer from './Footer';
import Blog1 from './blog/JS/Blog1';
import { Route, Switch } from 'react-router';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/blog1'>{Blog1}</Route>
        <Route path='/'>{PersonalSite}</Route>
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
