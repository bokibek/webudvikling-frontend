import { useState } from "react"; //DOM manipulation

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Clicket");
    setCount(count + 1);
  }

  return (
    <article>
      <button onClick={handleClick}>Buy</button>
    </article>
  );
}
