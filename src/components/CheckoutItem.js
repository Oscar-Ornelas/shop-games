import React from 'react';

function CheckoutItem(props) {
  console.log(props.platform);
  return (
    <div className="checkout-item">
      <h2 className="checkout-item-name">{props.name}</h2>
      <p className="checkout-item-platform">{props.platform}</p>
      <p>{props.quantity}</p>
      <img className="checkout-item-img" src={props.img}/>
    </div>
  )
}

export default CheckoutItem;
