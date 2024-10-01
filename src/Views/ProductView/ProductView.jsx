import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asynMock';

export default function ProductView() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    setProduct(getProduct(id));
  }, []);

  return (
    <>
      <div className="main-content container-lg" style={{ padding: '40px 0', marginTop: '70px' }}>
      <h2> <strong>Detalles del Producto</strong></h2>
        <h5 style={{ padding: 40 }}>  {product.title} - {product.category} </h5>
        <img src={product.image} alt={product.title} />
        <p style={{ padding: 40 }}>Descripcion: {product.description}</p>
        <p>$ {product.price}</p>
      </div>
    </>
  );
}