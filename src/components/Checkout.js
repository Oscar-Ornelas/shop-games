import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

function Checkout(props) {
  const [shippingFormData, setShippingFormData] = useState({
    firstName: "",
    LastName: "",
    address: "",
    zipCode: "",
    city: "",
    state: "",
    email: "",
    phoneNumber: ""
  });
  const [creditCardFormData, setCreditCardFormData] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCvv: ""
  });
  const [displayCreditCardForm, setDisplayCreditCardForm] = useState(true);
  const [displayShippingForm, setDisplayShippingForm] = useState(true);
  const [displayCart, setDisplayCart] = useState(false);
  const [buttonDisable, setButtonDisable] = useState({shippingFormSubmit: false, creditCardFormSubmit: false});
  const history = useHistory();

  function handleShippingFormChange(e) {
    const {name, value} = e.target;
    setShippingFormData(prevShippingFormData => ({...prevShippingFormData, [name] : value}));
  }

  function handleCreditCardFormChange(e) {
    const {name, value} = e.target;
    setCreditCardFormData(prevCreditCardFormData => ({...prevCreditCardFormData, [name] : value}));
  }

  function handleShippingFormSubmit(e) {
    e.preventDefault();
    setDisplayShippingForm(false);
    setButtonDisable(prevButtonDisable => ({...prevButtonDisable, shippingFormSubmit: true}));
  }

  function handleCreditCardFormSubmit(e) {
    e.preventDefault();
    setDisplayCreditCardForm(false);
    setButtonDisable(prevButtonDisable => ({...prevButtonDisable, creditCardFormSubmit: true}));
  }

  function showCart() {
    setDisplayCart(prevDisplayCart => !prevDisplayCart);
  }

  function completeOrder(e) {
    const {disabled} = e.target;
    if(!disabled) {
      history.push("/order-confirmation");
    }
  }

  const cartImages = props.cart.games && props.cart.games.map(game => (
    <img key={game.key} className="checkout-cart-image" src={game.background_image} alt="Game cover"/>
  ))

  const cartItems = props.cart.games && props.cart.games.map(game => (
    <div className="checkout-cart-item">
      <div className="checkout-cart-item-main">
        <img className="checkout-cart-image" src={game.background_image} alt="Game cover"/>
        <div className="checkout-cart-item-details">
          <p>{game.name} ({game.platform})</p>
          <p>Quantity: {game.quantity}</p>
        </div>
      </div>
      <p>{(game.price * game.quantity).toFixed(2)}</p>
    </div>
  ))

  return (
    <div className="container">
      <div className="checkout-container container-margin">

        <div className="checkout-inputs">
          <h2>Shipping</h2>
          <hr></hr>
          <div>
            <form onSubmit={handleShippingFormSubmit} className={`shipping-form ${displayShippingForm ? "" : "hidden-checkout"}`}>
              <div className="shipping-form-input-container first-name">
                <label className="shipping-form-input-label" for="firstName">First Name</label>
                <input
                  name="firstName"
                  id="firstName"
                  type="text"
                  value={shippingFormData.firstName}
                  onChange={handleShippingFormChange}
                  className="shipping-form-input"
                  required
                />
              </div>
              <div className="shipping-form-input-container last-name">
                <label className="shipping-form-input-label" for="lastName">Last Name</label>
                <input
                  name="lastName"
                  id="lastName"
                  type="text"
                  value={shippingFormData.lastName}
                  onChange={handleShippingFormChange}
                  className="shipping-form-input"
                  required
                />
              </div>
              <div className="shipping-form-input-container address">
                <label className="shipping-form-input-label" for="address">Address</label>
                <input
                  name="address"
                  id="address"
                  type="text"
                  value={shippingFormData.address}
                  onChange={handleShippingFormChange}
                  className="shipping-form-input"
                  required
                />
              </div>
              <div className="shipping-form-input-container zip-code">
                <label className="shipping-form-input-label" for="zipCode">Zip Code</label>
                <input
                  name="zipCode"
                  id="zipCode"
                  type="text"
                  value={shippingFormData.zipCode}
                  onChange={handleShippingFormChange}
                  className="shipping-form-input"
                  required
                />
              </div>
              <div className="shipping-form-input-container city">
                <label className="shipping-form-input-label" for="city">City</label>
                <input
                  name="city"
                  id="city"
                  type="text"
                  value={shippingFormData.city}
                  onChange={handleShippingFormChange}
                  className="shipping-form-input"
                  required
                />
              </div>
              <div className="shipping-form-input-container state">
                <label className="shipping-form-input-label" for="state">State</label>
                <select
                  name="state"
                  id="state"
                  value={shippingFormData.state}
                  onChange={handleShippingFormChange}
                  className="shipping-form-input"
                  required
                >
                	<option value="AL">Alabama</option>
                	<option value="AK">Alaska</option>
                	<option value="AZ">Arizona</option>
                	<option value="AR">Arkansas</option>
                	<option value="CA">California</option>
                	<option value="CO">Colorado</option>
                	<option value="CT">Connecticut</option>
                	<option value="DE">Delaware</option>
                	<option value="DC">District Of Columbia</option>
                	<option value="FL">Florida</option>
                	<option value="GA">Georgia</option>
                	<option value="HI">Hawaii</option>
                	<option value="ID">Idaho</option>
                	<option value="IL">Illinois</option>
                	<option value="IN">Indiana</option>
                	<option value="IA">Iowa</option>
                	<option value="KS">Kansas</option>
                	<option value="KY">Kentucky</option>
                	<option value="LA">Louisiana</option>
                	<option value="ME">Maine</option>
                	<option value="MD">Maryland</option>
                	<option value="MA">Massachusetts</option>
                	<option value="MI">Michigan</option>
                	<option value="MN">Minnesota</option>
                	<option value="MS">Mississippi</option>
                	<option value="MO">Missouri</option>
                	<option value="MT">Montana</option>
                	<option value="NE">Nebraska</option>
                	<option value="NV">Nevada</option>
                	<option value="NH">New Hampshire</option>
                	<option value="NJ">New Jersey</option>
                	<option value="NM">New Mexico</option>
                	<option value="NY">New York</option>
                	<option value="NC">North Carolina</option>
                	<option value="ND">North Dakota</option>
                	<option value="OH">Ohio</option>
                	<option value="OK">Oklahoma</option>
                	<option value="OR">Oregon</option>
                	<option value="PA">Pennsylvania</option>
                	<option value="RI">Rhode Island</option>
                	<option value="SC">South Carolina</option>
                	<option value="SD">South Dakota</option>
                	<option value="TN">Tennessee</option>
                	<option value="TX">Texas</option>
                	<option value="UT">Utah</option>
                	<option value="VT">Vermont</option>
                	<option value="VA">Virginia</option>
                	<option value="WA">Washington</option>
                	<option value="WV">West Virginia</option>
                	<option value="WI">Wisconsin</option>
                	<option value="WY">Wyoming</option>
                </select>
              </div>
              <div className="shipping-form-input-container email">
                <label className="shipping-form-input-label" for="email">Email</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  value={shippingFormData.email}
                  onChange={handleShippingFormChange}
                  className="shipping-form-input"
                  required
                />
              </div>
              <div className="shipping-form-input-container phone-number">
                <label className="shipping-form-input-label" for="phoneNumber">Phone Number</label>
                <input
                  name="phoneNumber"
                  id="phoneNumber"
                  type="tel"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  placeholder="1234567890"
                  value={shippingFormData.phoneNumber}
                  onChange={handleShippingFormChange}
                  className="shipping-form-input"
                  required
                />
              </div>

              <button className="btn checkout-btn shipping-form-btn">Save & Continue</button>
            </form>

            <div className={`post-form-submit ${displayShippingForm ? "hidden-checkout" : ""}`}>
              <div>
                <p className="post-submit-info">{shippingFormData.firstName + " " + shippingFormData.lastName}</p>
                <p className="post-submit-info">{shippingFormData.address}</p>
                <p className="post-submit-info">{shippingFormData.city + ", " + shippingFormData.state + ", " + shippingFormData.zipCode}</p>
                <p className="post-submit-info">{shippingFormData.phoneNumber}</p>
              </div>
              <div>
                <button onClick={() => setDisplayShippingForm(true)} className="btn post-form-submit-btn">Edit</button>
              </div>
            </div>

            <section className={`${displayShippingForm ? "hidden-checkout" : ""}`}>
              <h2>Payment</h2>
              <hr></hr>
                <form onSubmit={handleCreditCardFormSubmit} className={`credit-card-form ${displayCreditCardForm ? "" : "hidden-checkout"}`}>
                  <h3 className="credit-card-form-header">Credit Card</h3>
                  <div className="credit-card-form-input-container card-number">
                    <input
                      name="cardNumber"
                      value={creditCardFormData.cardNumber}
                      onChange={handleCreditCardFormChange}
                      className="credit-card-form-input"
                      type="tel"
                      inputmode="numeric"
                      pattern="[0-9]{16}"
                      autoComplete="cc-number"
                      maxLength="16"
                      placeholder="Card Number"
                      required
                    />
                  </div>
                  <div className="credit-card-form-input-container card-expiry">
                    <input
                      name="cardExpiry"
                      value={creditCardFormData.cardExpiry}
                      onChange={handleCreditCardFormChange}
                      className="credit-card-form-input"
                      type="tel"
                      pattern="[0-9/]{7}"
                      minLength="7"
                      maxLength="7"
                      placeholder="MM/YYYY"
                      required
                    />
                  </div>
                  <div className="credit-card-form-input-container card-cvv">
                    <input
                      name="cardCvv"
                      value={creditCardFormData.cardCvv}
                      onChange={handleCreditCardFormChange}
                      className="credit-card-form-input"
                      type="tel"
                      pattern="[0-9]{3}"
                      maxLength="3"
                      placeholder="CVV"
                      required
                    />
                  </div>

                  <button className="btn checkout-btn credit-card-form-btn">Save & Continue</button>
                </form>

                <div className={`post-form-submit ${displayCreditCardForm ? "hidden-checkout" : ""}`}>
                  <div>
                    <p className="post-submit-info">Card Ending in {creditCardFormData.cardNumber.slice(-4)}</p>
                    <p className="post-submit-info">Expires {creditCardFormData.cardExpiry}</p>
                  </div>
                  <div>
                    <button onClick={() => setDisplayCreditCardForm(true)} className="btn post-form-submit-btn">Change Payment</button>
                  </div>
                </div>

            </section>

          </div>
        </div>

        <section className="checkout-details">
          <div className="checkout-detail checkout-subtotal">
            <p className="checkout-detail-label">Subtotal</p>
            <p>{props.cart.gamesPrice}</p>
          </div>
          <div className="checkout-detail">
            <p className="checkout-detail-label">Shipping & Handling</p>
            <p>FREE</p>
          </div>
          <div className="checkout-detail">
            <p className="checkout-detail-label">Tax</p>
            <p>{props.cart.tax.toFixed(2)}</p>
          </div>
          <hr></hr>
          <div className="checkout-detail checkout-total">
            <h2>Total</h2>
            <p>{props.cart.tax + props.cart.gamesPrice}</p>
          </div>
          <hr></hr>

          <div>
            <button
              className={`btn checkout-btn checkout-detail-btn ${buttonDisable.shippingFormSubmit && buttonDisable.creditCardFormSubmit ? "" : "disabled-btn"}`}
              disabled={!(buttonDisable.shippingFormSubmit && buttonDisable.creditCardFormSubmit)}
              onClick={completeOrder}
            >
              Place Order
            </button>
            <p className="fine-print">By tapping Place Order, you agree to ShopGames' Privacy Policy and Conditions of Use.</p>
          </div>

          <div className="checkout-cart">
            <div className="checkout-cart-header">
              <p>Cart ({props.cart.cartCount} items)</p>
              <p onClick={showCart}>{displayCart === true ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</p>
            </div>

            <div className={`checkout-cart-items ${displayCart ? "" : "hidden-checkout"}`}>
              {cartItems}
            </div>

            <div className={`checkout-cart-images ${displayCart ? "hidden-checkout" : ""}`}>
              {cartImages}
            </div>

          </div>
        </section>

      </div>
    </div>
  )
}

export default Checkout;
