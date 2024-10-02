import { useEffect, useState } from 'react';
import { getProducts } from '../asynMock.js';
import ProductCard from './ProductCard.jsx';

export default function ProductsListCabello() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => {
      const filteredProducts = data.filter((product) => ['Fragancia para el Cabello', 'Shampoo'].includes(product.id));
      setProducts(filteredProducts);
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
