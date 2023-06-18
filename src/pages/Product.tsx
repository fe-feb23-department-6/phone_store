import { FC, useCallback, useState, useEffect } from 'react';
// import phonesFromServer from '../fullProductData.json';

import { FullProductData } from '../types/FullProductData';
import { Link, useParams } from 'react-router-dom';
import Back from '../img/icons/angle_arrow_left.svg';
import Home from '../img/icons/home_icon.svg';
import './PagesStyles/Product.scss';
import { ProductGallery } from '../components/Product/ProductGallery';
import { ProductInfo } from '../components/Product/ProductInfo';
import { ProductAbout } from '../components/Product/ProductAbout';
import { ProductTechSpechs } from '../components/Product/ProductTechSpechs';
import { getProductById, getProductsByNamespace } from '../api';
import { Loader } from '../components/Loader';

export const Product: FC = () => {
  const [initProduct, setInitProduct] = useState<FullProductData | null>(null);
  const [currProduct, setCurrProduct] = useState<FullProductData | null>(null);
  const [products, setProducts] = useState<FullProductData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { prodId } = useParams();

  /* const product: FullProductData = phonesFromServer; */

  /* const {
    // eslint-disable-next-line no-shadow
    screen,
    resolution,
    processor,
    ram,
    capacity,
    description,
    camera,
    zoom,
    cell,
  } = initProduct; */

  const getProduct = useCallback(async() => {
    try {
      setIsLoading(true);

      if (prodId) {
        const productData = await getProductById(prodId);

        setInitProduct(productData);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error('Failed to load product from server');
    }
  }, []);

  const getNamespaceProducts = useCallback(async() => {
    try {
      const namespaceId = initProduct?.namespaceId;

      if (namespaceId) {
        const productsData = await getProductsByNamespace(namespaceId);

        setProducts(productsData);
      }
    } catch (error) {
      throw new Error('Failed to load product from server');
    }
  }, [initProduct]);

  const changeNamespaceProduct = useCallback(
    (newId: string) => {
      const newCurrentProd = products.find(({ id }) => id === newId);

      if (newCurrentProd) {
        setCurrProduct(newCurrentProd);
      }
    },
    [products],
  );

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    getNamespaceProducts();
  }, [initProduct]);

  return (
    <div className="product-page">
      <div className="product-page__breadcrumbs">
        <Link to={'/'} className="product-page__breadcrumbs-link">
          <img
            className="product-page__breadcrumbs-img"
            src={Home}
            alt="home"
          />
        </Link>
      </div>

      <Link to={'/'} className="product-page__button-back">
        <img
          className="product-page__button-back-img"
          src={Back}
          alt="arrow-back"
        />
        <span>Back</span>
      </Link>
      {!isLoading ? (
        currProduct ? (
          <>
            <h1 className="product-page__title">{currProduct.name}</h1>
            <div className="product-page__product-container product-container">
              <div className="product-container__main-section">
                <ProductGallery
                  product={currProduct}
                  onClick={changeNamespaceProduct}
                />

                <ProductInfo product={currProduct} />
              </div>

              <div className="product-container__secondary-section">
                <ProductAbout description={currProduct.description} />

                <ProductTechSpechs product={currProduct} />
              </div>
            </div>
          </>
        ) : (
          <h2>We do not have this product</h2>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};
