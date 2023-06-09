import { FC, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { CatalogProductData } from '../../../types/CatalogProductData';
import { StoreContext } from '../../../context/StoreContext';
import './ProductCard.scss';

type Props = {
  product: CatalogProductData;
};

export const ProductCard: FC<Props> = ({ product }) => {
  const { cartContents, addToCart, favContents, handleFavChange }
    = useContext(StoreContext);
  const navigate = useNavigate();

  const {
    itemId,
    name: prodName,
    category,
    image,
    fullPrice,
    price,
    screen: prodScreen,
    capacity,
    ram,
  } = product;

  const isInCart = cartContents.map(({ id }) => id).includes(itemId);
  const isInFavorites = favContents.includes(itemId);

  const handleCartAction = () => {
    if (isInCart) {
      navigate('/cart');

      return;
    }

    addToCart(itemId);
  };

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <Link to={`/category/${category}/${itemId}`}>
          <img
            src={image}
            className="product-card__product-image"
            alt={prodName}
          />
        </Link>
      </div>
      <div className="product-card__product-name">
        <Link to={`/category/${category}/${itemId}`}>{prodName}</Link>
      </div>

      <div className="product-card__price">
        <div className="product-card__price--current">{`$${price}`}</div>
        <div className="product-card__price--full">{`$${fullPrice}`}</div>
      </div>

      <div className="product-info">
        <div className="product-info__parameter">
          <div className="product-info__parameter-text">Screen</div>
          <div className="product-info__parameter-size">{prodScreen}</div>
        </div>

        <div className="product-info__parameter">
          <div className="product-info__parameter-text">Capacity</div>
          <div className="product-info__parameter-size">{capacity}</div>
        </div>

        <div className="product-info__parameter">
          <div className="product-info__parameter-text">RAM</div>
          <div className="product-info__parameter-size">{ram}</div>
        </div>
      </div>

      <div className="buttons-block">
        <button
          type="button"
          className={cn('buttons-block__add-to-cart', {
            'buttons-block__add-to-cart--in-cart': isInCart,
          })}
          onClick={handleCartAction}
        >
          {isInCart ? 'Added to cart' : 'Add to cart'}
        </button>

        <button
          type="button"
          className={cn('buttons-block__favorites', {
            'buttons-block__favorites--remove': isInFavorites,
          })}
          onClick={() => handleFavChange(itemId)}
        />
      </div>
    </div>
  );
};
