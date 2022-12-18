import { useState } from "react"; //useState DOM manipulation
import { useNavigate } from "react-router-dom"; //useNavigate til at navigere til en specifik side

export default function CreateNewProduct() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  async function createProduct(event) {
    event.preventDefault(); //prevent from html reload

    const newProduct = {
      // key/name: value from state
      title: title,
      price: price,
      image: image,
    };

    const response = await fetch(
      "https://eksamens-projekt-d596b-default-rtdb.europe-west1.firebasedatabase.app/product.json",
      {
        method: "POST",
        body: JSON.stringify(newProduct),
      }
    );

    if (response.ok) {
      navigate("/admin/products");
    }
  }

  return (
    <section className="page">
      <article>
        <h1 className="text-center">Add New Product</h1>
        <form onSubmit={createProduct}>
          <input
            type="text"
            value={title}
            placeholder="Type a title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            value={price}
            placeholder="Type a price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="url"
            value={image}
            placeholder="Add image URL"
            onChange={(e) => setImage(e.target.value)}
          />
          {image && <img className="image-preview" src={image} alt="Choose" />}
          <button>Save</button>
        </form>
      </article>
    </section>
  );
}