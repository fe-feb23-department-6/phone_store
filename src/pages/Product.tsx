import { useCallback, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductGallery } from '../components/Product/ProductGallery';
import { ProductInfo } from '../components/Product/ProductInfo';
import { ProductAbout } from '../components/Product/ProductAbout';
import { ProductTechSpechs } from '../components/Product/ProductTechSpechs';
import { Loader } from '../components/Loader';
import { GoBackButton } from '../components/GoBackButton';
import { ProductsSlider } from '../components/ProductsSlider';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getProductsByNamespace, getProductsForSlider } from '../api';
import { CatalogProductData } from '../types/CatalogProductData';
import { FullProductData } from '../types/FullProductData';
import './PagesStyles/Product.scss';

export const Product = () => {
  const [currProduct, setCurrProduct] = useState<FullProductData | null>(null);
  const [products, setProducts] = useState<FullProductData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recProducts, setRecProducts] = useState<CatalogProductData[]>([]);

  const navigate = useNavigate();
  const { categoryName, prodId } = useParams();

  const getNamespaceProducts = useCallback(async() => {
    try {
      setIsLoading(true);

      if (prodId && categoryName) {
        const productsData = await getProductsByNamespace(categoryName, prodId);

        setProducts(productsData);

        const nameSpace = productsData[0].namespaceId;
        const recProductsData = await getProductsForSlider(
          `${nameSpace}/recommended`,
        );

        setRecProducts(recProductsData);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      navigate('/NotFound');

      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, [categoryName, prodId]);

  const onProductChange = useCallback(
    (newColor: string, newCapacity: string) => {
      const newCurrentProd = products.find(
        ({ color, capacity }) => color === newColor && capacity === newCapacity,
      );

      if (newCurrentProd) {
        setCurrProduct(newCurrentProd);

        navigate(`/category/${categoryName}/${newCurrentProd.id}`);
      }
    },
    [products],
  );

  const onUrlChange = useCallback(() => {
    if (currProduct && prodId !== currProduct.id) {
      const newCurrentProd = products.find(({ id }) => id === prodId);

      if (newCurrentProd) {
        setCurrProduct(newCurrentProd);
      } else {
        getNamespaceProducts();
      }
    }
  }, [prodId]);

  useEffect(() => {
    getNamespaceProducts();
  }, []);

  useEffect(() => {
    const initProd = products.find((prod) => prod.id === prodId);

    setCurrProduct(initProd || null);
  }, [products]);

  useEffect(() => {
    onUrlChange();
  }, [prodId]);

  return (
    <div className="product-page">
      {prodId && <Breadcrumbs category={categoryName} page={prodId} />}

      <GoBackButton />

      {!isLoading ? (
        currProduct ? (
          <>
            <h1 className="product-page__title">{currProduct.name}</h1>
            <div className="product-page__product-container product-container">
              <div className="product-container__main-section">
                <ProductGallery product={currProduct} />

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

            <section className="hot-prices products-slider">
              <h2 className="products-slider__title">You may also like</h2>

              <ProductsSlider sectionName={'discount'} products={recProducts} />
            </section>
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
