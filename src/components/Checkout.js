import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
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
    <div className="container checkout">
      <section className="checkout-content container-margin">
        <h1 className="checkout-header">Your Cart</h1>
        {props.cart.length > 0 ?
         <>
           {checkoutItems}
           <p>Total: ${totalPrice}</p>
         </>
        :
          <div className="checkout-empty">
            <p className="checkout-empty-cart">Looks like there is nothing in your cart!</p>
            <Link to="/" className="link"><button className="btn btn-empty-cart">Continue Shopping</button></Link>
          </div>
        }

      </section>
    </div>
  )
}

export default Checkout;
