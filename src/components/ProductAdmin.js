import { useNavigate } from "react-router-dom"; //useNavigate til at navigere til en specifik side

export default function ProductAdmin({ product, reload }) {
  const navigate = useNavigate();
  const url = `https://eksamens-projekt-d596b-default-rtdb.europe-west1.firebasedatabase.app/product/${product.id}.json`;
  // product is a prop containing product data

  function showUpdate() {
    navigate(`/admin/update/${product.id}`);
  }

  function showDeleteDialog() {
    const shouldDelete = window.confirm(
      `Do you want to delete "${product.title}"?`
    );
    if (shouldDelete) {
      deleteProduct();
    }
  }

  async function deleteProduct() {
    const response = await fetch(url, { method: "DELETE" });

    if (response.ok) {
      navigate("/admin"); // navigate back to products page
    }
  }

  return (
    <article>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price} DKK</p>
      <button onClick={showUpdate} id="update-btn">
        Update
      </button>
      <button onClick={showDeleteDialog} id="delete-btn">Delete</button>
    </article>
  );
}
