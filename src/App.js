import React, { Component } from 'react';
import './css/App.css';
import Header from './Header';
import Meat from './Meat';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Meat />
        <Footer />
      </div>
    );
  }
}

export default App;
