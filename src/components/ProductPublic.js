import { useNavigate } from "react-router-dom";


export default function ProductPublic({ product }) {
const navigate = useNavigate();

 function showProduct() {
    navigate(`/buy/${product.id}`);
 }

    return (
    <article>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>DKK {product.price},-</p>
      <button onClick={showProduct}>Buy Me</button>
    </article>
  );
}
