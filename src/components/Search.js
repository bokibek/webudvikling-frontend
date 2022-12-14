/* import React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  // This function will be called whenever the text input changes
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://eksamens-projekt-d596b-default-rtdb.europe-west1.firebasedatabase.app/product.json"
      ); // read all users from firebase
      const data = await response.json();
      const array = Object.keys(data).map((key) => ({ id: key, ...data[key] })); // from object to array
      setSearchParams(array); // set the state with fetched data
    }
    getData();
  }, []); // stop from recalling and loop

  return (
    <section>
      <div style={{ padding: 50 }}>
        <button onClick={}
        />
      </div>
    </section>
  );
}
 */