import React, {useState} from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function CartItem(props) {
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
    <div className="cart-item">
        <div className="cart-item-content">
          <div className="cart-item-info">
            <h2 className="cart-item-name">{props.name}</h2>
            <div className="cart-item-main-info">
              <p className="cart-item-platform">Platform: {props.platform}</p>
              <p className="cart-item-price">Price: ${props.price}</p>
              <p className="cart-item-quantity">Quantity: {props.quantity}</p>
              <p className="cart-item-total-price">Total: ${props.price}</p>
            </div>
          </div>
          <img className="cart-item-img" src={props.img}/>
        </div>
        <p onClick={openModal}><i className="fas fa-times"></i></p>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Create Room Form"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="modal-item-container">
            <div className="modal-item-top">
              <h3 className="modal-item-header">Remove product?</h3>
              <i onClick={closeModal} className="fas fa-times"></i>
            </div>
            <p className="modal-item-subtitle">Are you sure you want to remove the following product from the cart?</p>
            <div className="modal-item-product">
              <p className="modal-item-name">{props.name}</p>
              <img className="modal-item-img" src={props.img}/>
            </div>
            <div className="modal-item-btns">
              <button onClick={closeModal} className="btn btn-cancel">Cancel</button>
              <button onClick={removeItemFromCart} className="btn btn-accept">Yes</button>
            </div>
          </div>
        </Modal>
    </div>
  )
}

export default CartItem;
