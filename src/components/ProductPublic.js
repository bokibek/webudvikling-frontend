import { useNavigate } from "react-router-dom"; //useNavigate til at navigere til en specifik side

export default function ProductPublic({ product }) {
    const navigate = useNavigate();
    // product is a prop containing product data

    function handleClick() {
        navigate(`products/${product.id}`);
    }

    function buyProduct() {
        navigate(`products/${product.id}`);
    }

    return (
        <article onClick={handleClick}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>DKK {product.price},-</p>
            <button onClick={buyProduct} id="buy-btn">Buy</button>
        </article>
    );
}



