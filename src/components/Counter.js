import { useState } from "react";

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
