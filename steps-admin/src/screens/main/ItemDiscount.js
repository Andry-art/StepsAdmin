import React from 'react';
import './Main.css';

const ItemDiscount = ({ title }) => {
  return (
    <>
      <div className="list_item">
        <p className="list_item_text">{title}</p>
      </div>
    </>
  );
};

export default ItemDiscount;
