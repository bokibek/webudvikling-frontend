import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BuyPage({setProductCount}) {
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

  function incrementCount () {
    setProductCount (prevCount => prevCount +1);
  }

  return (
    <section className="grid-container-buypage">
      <article>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.name} />
      </article>
      <article>
        <h2>Some text about the product</h2>
        <p>Could also come from the server with a description tag</p>
        <p>
          <span>DKK {product.price}</span>
        </p>
        <button onClick={incrementCount}>Buy</button>
      </article>
    </section>
  );
}
