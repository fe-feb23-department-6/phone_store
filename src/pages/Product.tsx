import { FC, useCallback, useState, useEffect } from 'react';
import { FullProductData } from '../types/FullProductData';
import { Link, useParams } from 'react-router-dom';
import Home from '../img/icons/home_icon.svg';
import './PagesStyles/Product.scss';
import { ProductGallery } from '../components/Product/ProductGallery';
import { ProductInfo } from '../components/Product/ProductInfo';
import { ProductAbout } from '../components/Product/ProductAbout';
import { ProductTechSpechs } from '../components/Product/ProductTechSpechs';
import { getProductsByNamespace } from '../api';
import { Loader } from '../components/Loader';
import { GoBackButton } from '../components/GoBackButton';

export const Product: FC = () => {
  const [currProduct, setCurrProduct] = useState<FullProductData | null>(null);
  const [products, setProducts] = useState<FullProductData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { categoryName, prodId } = useParams();

  const getNamespaceProducts = useCallback(async() => {
    try {
      setIsLoading(true);

      if (prodId && categoryName) {
        const productsData = await getProductsByNamespace(categoryName, prodId);

        setProducts(productsData);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      throw new Error('Failed to load product from server');
    }
  }, []);

  const onProductChange = useCallback(
    (newColor: string, newCapacity: string) => {
      const newCurrentProd = products.find(
        ({ color, capacity }) => color === newColor && capacity === newCapacity,
      );

      if (newCurrentProd) {
        setCurrProduct(newCurrentProd);
      }
    },
    [products],
  );

  useEffect(() => {
    getNamespaceProducts();
  }, []);

  useEffect(() => {
    const initProd = products.find(prod => prod.id === prodId);

    setCurrProduct(initProd || null);
  }, [products]);

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

      <GoBackButton />
      {!isLoading ? (
        currProduct ? (
          <>
            <h1 className="product-page__title">{currProduct.name}</h1>
            <div className="product-page__product-container product-container">
              <div className="product-container__main-section">
                <ProductGallery
                  product={currProduct}
                />

                <ProductInfo
                  product={currProduct}
                  onProductChange={onProductChange}
                />
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
