import ProductsList from '../components/ProductsList';

export default function SkincareView() {
  return (
    <>

      <h2 className="text-center" style={{ marginTop: '20px' }}>
        <strong>Nuestros Productos</strong>
      </h2>
  <div className="main-content container-lg" style={{ padding: '10px 0', marginTop: '10px' }}>

  <ProductsList />
  </div>

      
    </>
  );
}