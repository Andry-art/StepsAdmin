import React from 'react';
import Header from './Header';
import ItemDiscount from './ItemDiscount';
import './Main.css';

const arrr = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];

const Main = () => {
  return (
    <>
      <Header />
      <div className="list_container">
        {arrr.map((it) => (
          <ItemDiscount title={it} />
        ))}
      </div>
    </>
  );
};

export default Main;
