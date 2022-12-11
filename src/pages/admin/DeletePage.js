import { useEffect, useState } from "react"; //useState DOM manipulation, useEffect når man skal fetche data
import { useNavigate, useParams } from "react-router-dom"; //useNavigate til at navigere til en specifik side, useParams for at returnere en product ved product id

export default function DeletePage() {
  const [product, setProduct] = useState([]); // state to handle the data (product)
  const params = useParams();
  const url = `https://eksamens-projekt-d596b-default-rtdb.europe-west1.firebasedatabase.app/product/${params.id}.json`;
  const navigate = useNavigate();

  //the side effect - fetch product
  useEffect(() => {
    async function getProduct() {
      const response = await fetch(url); // read one product from firebase
      const data = await response.json();
      setProduct(data); // set the state with fetched data
    }
    getProduct();
  }, [url]); // <--- "[]" VERY IMPORTANT!!!

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
      navigate("/admin/products/"); // navigate back to home page
    }
  }


  return (
    <section className="delete-page">
      <img src={product.image} alt={product.name} />
      <section>
        <h1>{product.title}</h1>
        <p>DKK {product.price}</p>
        <button className="delete-btn" onClick={showDeleteDialog}>
          Delete product
        </button>
      </section>
    </section>
  );
}


