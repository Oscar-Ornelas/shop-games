import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import CartItem from './CartItem';

function Cart(props) {
  const [gamesPrice, setGamesPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const history = useHistory();

  useEffect(() => {
    setGamesPrice(0);
    props.cart.forEach(game => {
      setGamesPrice(prevGamesPrice => prevGamesPrice += game.quantity * game.price);
      setTax(prevTax => prevTax += Math.round(game.quantity * game.price * 0.08 * 100) / 100);
    })

  }, [props.cart]);

  const checkoutItems = props.cart.map(game => (
    <CheckoutItem
      key={game.id}
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
        {props.cart.length > 0 ?
         <>
           {checkoutItems}
           <p>Total Items: {props.cart.length}</p>
           <p>Shipping & Handling: FREE</p>
           <p>Taxes: ${tax.toFixed(2)}</p>
           <p>Total: ${tax + gamesPrice}</p>
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
