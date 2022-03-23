import React from 'react';

const Calcul = (props) => (
  <div className="calculator">
    {props.children}
    <ul className="ac">
      <button type="button">ac</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button className="bg-orange" type="button">+</button>
    </ul>
    <ul className="789x">
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button className="bg-orange" type="button">x</button>
    </ul>
    <ul className="456">
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button className="bg-orange" type="button">-</button>
    </ul>
    <ul className="123">
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button className="bg-orange" type="button">-</button>
    </ul>
    <ul className="0+">
      <button className="button-0" type="button">0</button>
      <button type="button">.</button>
      <button className="bg-orange" type="button">+</button>
    </ul>
  </div>
);
export default Calcul;
