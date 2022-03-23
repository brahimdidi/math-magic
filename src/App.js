import './App.css';
import React, { Component } from 'react';
import Calcul from './components/calculator';
import './components/calculator.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Container">
        <Calcul />
      </div>
    );
  }
}

export default App;
