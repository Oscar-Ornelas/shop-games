import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function OrderConfirmation() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 8000)
  }, [])

  return (
    <div className="order-confirmation-container">
      <h1 className="order-confirmation-header">Order Success!</h1>
      <i className="far fa-check-circle"></i>
      <p className="order-confirmation-subtitle">
        Order #{Math.floor(Math.random() * (999999 - 100000) + 100000)} has been placed!
        A confirmation email will be sent to your inbox soon.
      </p>
      <p className="order-confirmation-redirect">Redirecting to Home page...</p>
    </div>
  )
}

export default OrderConfirmation;
