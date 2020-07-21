import React, {useState, useEffect} from 'react';
import CheckoutItem from './CheckoutItem';

function Checkout(props) {

  const checkoutItems = props.cart.map(game => (
    <CheckoutItem
      key={game.id}
      img={game.background_image}
      price={game.price}
      name={game.name}
      quantity={game.quantity}
      platform={game.platform}
    />
  ))

  return (
    <div className="container">
      <section className="checkout container-margin">
        {checkoutItems}
      </section>
    </div>
  )
}

export default Checkout;
