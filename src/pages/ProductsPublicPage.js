import { useEffect, useState } from "react"; //useState DOM manipulation, useEffect når man skal fetche data
import ProductPublic from "../components/ProductPublic";

export default function ProductsPublicPage() {
  const [products, setProducts] = useState([]); // state to handle the data (products)

  // products: name of the state
  // setProducts: name of the function to set the state

  //the side effect - fetch products // => er en simplificering af en function
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://eksamens-projekt-d596b-default-rtdb.europe-west1.firebasedatabase.app/product.json"
      ); // read all products from firebase
      const data = await response.json();
      const array = Object.keys(data).map((key) => ({ id: key, ...data[key] })); // from object to array
      setProducts(array); // set the state with fetched data
    }
    getData();
  }, []); // stop from recalling and loop

  return (
    <section className="page">
      <h1>Products Page</h1>
      <article className="grid-container">
        {products.map((productObj) => (
          <ProductPublic product={productObj} key={productObj.id} />
        ))}
      </article>
    </section>
  );
}
