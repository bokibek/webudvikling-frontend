import { useEffect, useState } from "react"; //useState DOM manipulation, useEffect når man skal fetche data
import ProductPublic from "../components/ProductPublic";

export default function ProductsPublicPage() {
  const [products, setProducts] = useState([]); // state to handle the data (users)
  // users: name of the state
  // setUsers: name of the function to set the state

  //the side effect - fetch users // => er en simplificering af en function
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://eksamens-projekt-d596b-default-rtdb.europe-west1.firebasedatabase.app/product.json"
      ); // read all users from firebase
      const data = await response.json();
      const array = Object.keys(data).map((key) => ({ id: key, ...data[key] })); // from object to array
      setProducts(array); // set the state with fetched data
    }
    getData();
  }, []); // stop from recalling and loop

  return (
    <body className="page">
      <section>
        <h1>Products Page</h1>
        <section className="grid-container">
          {products.map((productObj) => (
            <ProductPublic product={productObj} key={productObj.id} />
          ))}
        </section>
      </section>
    </body>
  );
}
