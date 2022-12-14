import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "../components/Counter";

export default function BuyPage() {
  const [product, setUser] = useState([]); // state to handle the data (product)
  const params = useParams();
  const url = `https://eksamens-projekt-d596b-default-rtdb.europe-west1.firebasedatabase.app/product/${params.id}.json`;

  //the side effect - fetch product
  useEffect(() => {
    async function getUser() {
      const response = await fetch(url); // read one product from firebase
      const data = await response.json();
      setUser(data); // set the state with fetched data
    }
    getUser();
  }, [url]); 

  return (
    <section className="page">
      <article className="product-detail">
        <img src={product.image} alt={product.name} />
        <article>
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <Counter></Counter>
        </article>
      </article>
    </section>
  );
}
