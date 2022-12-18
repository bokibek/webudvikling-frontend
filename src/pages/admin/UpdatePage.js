import { useState, useEffect } from "react"; //useState DOM manipulation, useEffect to fetch data
import { useNavigate, useParams } from "react-router-dom"; //useNavigate til at navigere til en specifik bruger, useParams (url parameter) til at trække id ud fra product

export default function UpdatePage() {
  const params = useParams();
  const url = `https://eksamens-projekt-d596b-default-rtdb.europe-west1.firebasedatabase.app/product/${params.id}.json`;
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  //useEffect for at fetche data
  useEffect(() => {
    async function getProduct() {
      const response = await fetch(url); // read one product from firebase
      const product = await response.json();
      setTitle(product.title);
      setPrice(product.price);
      setImage(product.image);
    }
    getProduct();
  }, [url]); //kør fetch på en specifik produkt eller et tomt array

  async function updateProduct(event) {
    event.preventDefault(); //prevent from html reload

    const productToUpdate = {
      // key/price: value from state
      title: title,
      price: price,
      image: image,
    };

    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(productToUpdate),
    });

    if (response.ok) {
      navigate("/admin/products/");
    }
  }

  return (
    <body className="page">
  
      <h1 className="text-center">Update product</h1>
      <section>
        <form onSubmit={updateProduct}>
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
            placeholder="Paste image url"
            onChange={(e) => setImage(e.target.value)}
          />
          {image && <img className="image-preview" src={image} alt="Choose" />}
          <button>Save</button>
        </form>
      </section>
    </body>
  );
}