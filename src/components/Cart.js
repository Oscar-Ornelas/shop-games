import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import CartItem from './CartItem';

function Cart(props) {
  const history = useHistory();

  useEffect(() => {
    props.setCart(prevCart => ({...prevCart, gamesPrice: 0, tax: 0}));

    props.cart.games && props.cart.games.forEach(game => {
      props.setCart(prevCart => ({...prevCart, gamesPrice: prevCart.gamesPrice += game.quantity * game.price}));
      props.setCart(prevCart => ({...prevCart, tax: prevCart.tax += Math.round(game.quantity * game.price * 0.08 * 100) / 100}));
    })

  }, [props.cart.games]);

  const checkoutItems = props.cart.games && props.cart.games.map(game => (
    <CartItem
      key={game.key}
      img={game.background_image}
      price={game.price}
      name={game.name}
      quantity={game.quantity}
      platform={game.platform}
      cart={props.cart}
      setCart={props.setCart}
    />
  ))

  return (
    <div className="container cart">
      <section className="cart-content container-margin">
        <h1 className="cart-header">Your Cart</h1>
        {props.cart.cartCount > 0 ?
         <>
           {checkoutItems}
           <p>Total Items: {props.cart.cartCount}</p>
           <p>Shipping & Handling: FREE</p>
           <p>Taxes: ${props.cart.tax ? props.cart.tax.toFixed(2) : ""}</p>
           <p>Total: ${props.cart.tax ? props.cart.tax + props.cart.gamesPrice : ""}</p>
           <button onClick={() => history.push('/checkout')} className="btn checkout-btn">Proceed To Checkout</button>
         </>
        :
          <div className="cart-empty">
            <p className="cart-empty-cart">Looks like there is nothing in your cart!</p>
            <Link to="/" className="link btn-empty-cart"><button className="btn btn-empty-cart">Continue Shopping</button></Link>
          </div>
        }

      </section>
    </div>
  )
}

export default Cart;
