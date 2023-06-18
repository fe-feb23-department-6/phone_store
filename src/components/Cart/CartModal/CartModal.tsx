import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartModal.scss';

type Props = {
  onClick: () => void;
};

export const CartModal: FC<Props> = ({ onClick }) => {
  const navigate = useNavigate();

  const redirectToMainPage = () => {
    navigate('/');
  };

  return (
    <div className="modal-wrapper" onClick={() => onClick()}>
      <div className="cart-modal" onClick={(ev) => ev.stopPropagation()}>
        <button
          type="button"
          className="cart-modal__close"
          onClick={() => onClick()}
        >
          <i className="fa-solid fa-xmark" />
        </button>
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
