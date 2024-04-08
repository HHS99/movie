import { useEffect } from "react";
import { useState } from "react";


export default function App() {
  const [count, setCount] = useState(0);
  const add = () => { setCount(count + 1)};
  const minus = () => { setCount(count - 1) }

  useEffect(() => {
    console.log('ues Effect');
    console.log(count);
  });
  console.log('im rendering');
  
  return (
    <div>
      <h1>The number is: {count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={minus}>Minus</button>
    </div>
  );
}
