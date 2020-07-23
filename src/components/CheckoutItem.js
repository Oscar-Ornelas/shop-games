import React, {useState} from 'react';

function CheckoutItem(props) {

  return (
    <div className="checkout-item">
        <div className="checkout-item-content">
          <div className="checkout-item-info">
            <h2 className="checkout-item-name">{props.name}</h2>
            <p className="checkout-item-platform">Platform: {props.platform}</p>
            <p className="checkout-item-price">Price: ${props.price}</p>
            <p className="checkout-item-quantity">Quantity: {props.quantity}</p>
            <p className="checkout-item-total-price">Total: ${props.price}</p>
          </div>
          <img className="checkout-item-img" src={props.img}/>
        </div>
        <i className="fas fa-times"></i>
    </div>
  )
}

export default CheckoutItem;
