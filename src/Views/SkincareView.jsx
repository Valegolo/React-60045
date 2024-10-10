import { useParams } from 'react-router-dom';
import ProductsListSkincare from '../components/ProductsListSkincare';
import { useEffect,useState } from 'react';
import { getCategory } from '../asynMock';

export default function SkincareView() {
  const[products,setProducts]= useState([]);
  const{categoryId}=useParams()
  useEffect(()=>{
    const data = getCategory(categoryId);
    setProducts(data)
  },[categoryId] );
  console.log (categoryId)
  return (
    <>

      <h2 className="text-center" style={{ marginTop: '40px' }}>
        <strong>Nuestros Productos</strong>
      </h2>
  <div className="main-content container-lg" style={{ padding: '10px 0', marginTop: '10px' }}>

  <ProductsListSkincare products = {products} />
  </div>

      
    </>
  );
}