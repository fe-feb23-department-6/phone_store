import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartModal.scss';

export const CartModal = () => {
  const navigate = useNavigate();

  const redirectToMainPage = () => {
    navigate('/');
  };

  return (
    <div className="modal-wrapper">
      <div className="cart-modal">
        <h2 className="cart-modal__text">Thank you for your purchase!</h2>
        <button
          className="cart-modal__to-main-page"
          onClick={redirectToMainPage}
        >
          To main page
        </button>
      </div>
    </div>
  );
};

export default CartModal;
