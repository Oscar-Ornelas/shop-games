import React, {useState, useEffect} from 'react';
import CheckoutItem from './CheckoutItem';

function Checkout(props) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    props.cart.forEach(game => {
      setTotalPrice(prevTotalPrice => prevTotalPrice += game.quantity * game.price);
    })
  }, []);

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
        <h1 className="checkout-header">Your Cart</h1>
        {checkoutItems}
        <p>Total: ${totalPrice}</p>
      </section>
    </div>
  )
}

export default Checkout;
