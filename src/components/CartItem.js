import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function CartItem(props) {
  const [modalIsOpen,setIsOpen] = useState(false);
  const [formQuantity, setFormQuantity] = useState(props.quantity);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  function handleChange(e) {
    const {value} = e.target;
    setFormQuantity(value);
  }

  function removeItemFromCart() {
    props.setCart(prevCart => {
      const newCart = prevCart.games.filter(game => {
        if(!(game.name === props.name && game.platform === props.platform && game.quantity === props.quantity)) {
          return game;
        }
      })

      return ({games: newCart, cartCount: prevCart.cartCount -= props.quantity});
    })
  }

  return (
    <div className="cart-item">
        <div className="cart-item-content">
          <div className="cart-item-info">
            <h2 className="cart-item-name">{props.name}</h2>
            <div className="cart-item-main-info">
              <p className="cart-item-platform">Platform: {props.platform}</p>
              <p className="cart-item-price">Price: ${props.price}</p>
              <form className="cart-item-form">
                <label for="formQuantity" className="cart-item-quantity">Quantity:</label>
                <select
                  name="formQuantity"
                  id="formQuantity"
                  value={formQuantity}
                  onChange={handleChange}
                  className="cart-item-form-quantity"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </form>

              <p className="cart-item-total-price">Total: ${(props.price * props.quantity).toFixed(2)}</p>
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
