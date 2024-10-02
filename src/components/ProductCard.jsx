import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <>
        <article style={{ border: '2px solid teal', padding: 30 }}>
        <h4>{product.title}</h4>
        <img src={product.image} alt={product.title} />
        <p>$ {product.price}</p>
        <button type="button" class="btn btn-outline-primary">
          <Link to={`/${product.category}/${product.id}`}>Details</Link>
        </button>
      </article>
    </>
  );
}