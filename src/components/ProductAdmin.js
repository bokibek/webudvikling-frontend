import { useNavigate } from "react-router-dom"; //useNavigate til at navigere til en specifik side

export default function ProductAdmin({ product }) {
  const navigate = useNavigate();
  // product is a prop containing product data

  function showUpdate() {
    navigate(`/admin/update/${product.id}`);
  }

  function showDelete() {
    navigate(`/admin/delete/${product.id}`);
  }

  return (
    <article>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>DKK {product.price},-</p>
      <button onClick={showUpdate} id="update-btn">Update</button>
      <button onClick={showDelete} id="delete-btn">Delete</button>
    </article>
  );
}
