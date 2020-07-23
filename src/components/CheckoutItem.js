import React, {useState} from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function CheckoutItem(props) {
  const [modalIsOpen,setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  function removeItemFromCart() {

    props.setCart(prevCart => prevCart.filter(item => {
      if(item.name !== props.name) {
        return item;
      }
    }))
  }

  return (
    <div className="checkout-item">
        <div className="checkout-item-content">
          <div className="checkout-item-info">
            <h2 className="checkout-item-name">{props.name}</h2>
            <div className="checkout-item-main-info">
              <p className="checkout-item-platform">Platform: {props.platform}</p>
              <p className="checkout-item-price">Price: ${props.price}</p>
              <p className="checkout-item-quantity">Quantity: {props.quantity}</p>
              <p className="checkout-item-total-price">Total: ${props.price}</p>
            </div>
          </div>
          <img className="checkout-item-img" src={props.img}/>
        </div>
        <p onClick={openModal}><i className="fas fa-times"></i></p>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Create Room Form"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="remove-item-container">
            <div className="remove-item-top">
              <h3 className="remove-item-header">Remove product?</h3>
              <i onClick={closeModal} className="fas fa-times"></i>
            </div>
            <p className="remove-item-subtitle">Are you sure you want to remove the following product from the cart?</p>
            <div className="remove-item-product">
              <p className="remove-item-name">{props.name}</p>
              <img className="remove-item-img" src={props.img}/>
            </div>
            <div className="remove-item-btns">
              <button onClick={closeModal} className="btn btn-cancel">Cancel</button>
              <button onClick={removeItemFromCart} className="btn btn-accept">Yes</button>
            </div>
          </div>
        </Modal>
    </div>
  )
}

export default CheckoutItem;
