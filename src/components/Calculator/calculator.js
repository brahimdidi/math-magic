import React, { Component } from 'react';
import calculate from '../../logic/calculate';

class Calcul extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handler = this.handler.bind(this);
  }

  handler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <section className="calculator-section">
        <div className="calculator-title">Lets do some Math</div>
        <div className="calculator">
          <div className="input">
            {total}
            {operation}
            {next}
          </div>
          <ul className="AC">
            <button onClick={this.handler} type="button">AC</button>
            <button onClick={this.handler} type="button">+/-</button>
            <button onClick={this.handler} type="button">%</button>
            <button onClick={this.handler} className="bg-orange" type="button">÷</button>
          </ul>
          <ul className="789x">
            <button onClick={this.handler} type="button">7</button>
            <button onClick={this.handler} type="button">8</button>
            <button onClick={this.handler} type="button">9</button>
            <button onClick={this.handler} className="bg-orange button-x" type="button">x</button>
          </ul>
          <ul className="456">
            <button onClick={this.handler} type="button">4</button>
            <button onClick={this.handler} type="button">5</button>
            <button onClick={this.handler} type="button">6</button>
            <button onClick={this.handler} className="bg-orange" type="button">-</button>
          </ul>
          <ul className="123">
            <button onClick={this.handler} type="button">1</button>
            <button onClick={this.handler} type="button">2</button>
            <button onClick={this.handler} type="button">3</button>
            <button onClick={this.handler} className="bg-orange" type="button">+</button>
          </ul>
          <ul className="0+">
            <button onClick={this.handler} className="button-0" type="button">0</button>
            <button onClick={this.handler} type="button">.</button>
            <button onClick={this.handler} className="bg-orange" type="button">=</button>
          </ul>
        </div>
      </section>
    );
  }
}

export default Calcul;
