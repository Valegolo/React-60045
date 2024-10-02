import ProductsListMaquillaje from '../components/ProductListMaquillaje';

export default function MaquillajeView() {
  return (
    <>

      <h2 className="text-center" style={{ marginTop: '40px' }}>
        <strong>Nuestros Productos</strong>
      </h2>
  <div className="main-content container-lg" style={{ padding: '10px 0', marginTop: '10px' }}>

  <ProductsListMaquillaje />
  </div>

      
    </>
  );
}