import { useNavigate } from "react-router-dom"; //useNavigate til at navigere til en specifik side
import { useState } from "react";

export default function ProductPublic({ product }) {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    // product is a prop containing product data

      function handleClick() {
        console.log("Clicket");
        setCount(count + 1);
        navigate(`/buy`);
      } //counter function

    return (
        <article onClick={handleClick}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>DKK {product.price},-</p>
            <button onClick={handleClick} id="buy-btn">Buy Me</button>
        </article>
    );
}



