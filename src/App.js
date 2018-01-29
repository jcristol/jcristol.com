import React, { Component } from 'react';
import './css/style.css';
import Header from './Header';
import Meat from './Meat';
import Footer from './Footer';
import Blog1 from './blog/JS/Blog1';
import Blog2 from './blog/JS/Blog2';
import { Route, Switch } from 'react-router';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/Blog1' component={Blog1}/>
        <Route path='/Blog2' component={Blog2}/>
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
