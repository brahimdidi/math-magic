import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calcul = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const handler = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <div className="calculator">
      <div className="input">
        {state.total}
        {state.operation}
        {state.next}
      </div>
      <ul className="AC">
        <button onClick={handler} type="button">AC</button>
        <button onClick={handler} type="button">+/-</button>
        <button onClick={handler} type="button">%</button>
        <button onClick={handler} className="bg-orange" type="button">÷</button>
      </ul>
      <ul className="789x">
        <button onClick={handler} type="button">7</button>
        <button onClick={handler} type="button">8</button>
        <button onClick={handler} type="button">9</button>
        <button onClick={handler} className="bg-orange button-x" type="button">x</button>
      </ul>
      <ul className="456">
        <button onClick={handler} type="button">4</button>
        <button onClick={handler} type="button">5</button>
        <button onClick={handler} type="button">6</button>
        <button onClick={handler} className="bg-orange" type="button">-</button>
      </ul>
      <ul className="123">
        <button onClick={handler} type="button">1</button>
        <button onClick={handler} type="button">2</button>
        <button onClick={handler} type="button">3</button>
        <button onClick={handler} className="bg-orange" type="button">+</button>
      </ul>
      <ul className="0+">
        <button onClick={handler} className="button-0" type="button">0</button>
        <button onClick={handler} type="button">.</button>
        <button onClick={handler} className="bg-orange" type="button">=</button>
      </ul>
    </div>
  );
};

export default Calcul;
