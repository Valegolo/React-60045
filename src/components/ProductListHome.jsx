import { useEffect, useState } from 'react';
import { getProducts } from '../asynMock.js';
import ProductCard from './ProductCard.jsx';

export default function ProductsListHome() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => {
      setProducts(data); // Sin Filtro
    });
  }, []);

  return (
    <div className="main-content container-lg" style={{ padding: '40px 0', marginTop: '70px' }}>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
