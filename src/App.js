import './App.css';
import React, { Component } from 'react';
import Calcul from './components/calculator';
import './components/calculator.css';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <Calcul>
          <input type="number" className="input" placeholder="0" />
        </Calcul>
      </div>
    );
  }
}

export default App;
