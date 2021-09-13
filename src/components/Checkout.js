import React, {useState} from 'react';

function Checkout() {
  const [shippingFormData, setShippingFormData] = useState({
    firstName: "",
    LastName: "",
    address: "",
    zipCode: "",
    city: "",
    state: "",
    email: "",
    phoneNumber: ""
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setShippingFormData(prevShippingFormData => ({...prevShippingFormData, [name] : value}));
  }

  return (
    <div className="checkout-container container">
      <div className="container-margin">

        <div className="checkout-inputs">
          <h2>Shipping</h2>
          <hr></hr>
          <div>
            <form className="shipping-form">
              <div className="shipping-form-input-container">
                <label className="shipping-form-input-label" for="firstName">First Name</label>
                <input
                  name="firstName"
                  id="firstName"
                  type="text"
                  value={shippingFormData.firstName}
                  onChange={handleChange}
                  className="shipping-form-input"
                  required
                />
              </div>
              <div className="shipping-form-input-container">
                <label className="shipping-form-input-label" for="lastName">Last Name</label>
                <input
                  name="lastName"
                  id="lastName"
                  type="text"
                  value={shippingFormData.lastName}
                  onChange={handleChange}
                  className="shipping-form-input"
                  required
                />
              </div>
              <div className="shipping-form-input-container">
                <label className="shipping-form-input-label" for="address">Address</label>
                <input
                  name="address"
                  id="address"
                  type="text"
                  value={shippingFormData.address}
                  onChange={handleChange}
                  className="shipping-form-input"
                  required
                />
              </div>
              <div className="shipping-form-input-container">
                <label className="shipping-form-input-label" for="zipCode">Zip Code</label>
                <input
                  name="zipCode"
                  id="zipCode"
                  type="text"
                  value={shippingFormData.zipCode}
                  onChange={handleChange}
                  className="shipping-form-input"
                  required
                />
              </div>
              <div className="shipping-form-input-container">
                <label className="shipping-form-input-label" for="city">City</label>
                <input
                  name="city"
                  id="city"
                  type="text"
                  value={shippingFormData.city}
                  onChange={handleChange}
                  className="shipping-form-input"
                  required
                />
              </div>
              <div className="shipping-form-input-container">
                <label className="shipping-form-input-label" for="state">State</label>
                <select
                  name="state"
                  id="state"
                  value={shippingFormData.state}
                  onChange={handleChange}
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
              <div className="shipping-form-input-container">
                <label className="shipping-form-input-label" for="email">Email</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  value={shippingFormData.email}
                  onChange={handleChange}
                  className="shipping-form-input"
                  required
                />
              </div>
              <div className="shipping-form-input-container">
                <label className="shipping-form-input-label" for="phoneNumber">Phone Number</label>
                <input
                  name="phoneNumber"
                  id="phoneNumber"
                  type="tel"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  placeholder="1234567890"
                  value={shippingFormData.phoneNumber}
                  onChange={handleChange}
                  className="shipping-form-input"
                  required
                />
              </div>

            </form>
          </div>
        </div>

        <div className="checkout-details">
          <div className="checkout-detail">
            <p>Subtotal</p>
            <p>$49.47</p>
          </div>
          <div className="checkout-detail">
            <p>Shipping & Handling</p>
            <p>FREE</p>
          </div>
          <div className="checkout-detail">
            <p>Tax</p>
            <p>$4.27</p>
          </div>
          <hr></hr>
          <div className="checkout-detail">
            <h2>Total</h2>
            <p>$53.74</p>
          </div>
          <hr></hr>

          <button className="btn checkout-btn">Place Order</button>

          <p className="fine-print">By tapping Place Order, you agree to ShopGames' Privacy Policy and Conditions of Use.</p>
        </div>

      </div>
    </div>
  )
}

export default Checkout;
