import { useState } from "react";


export default function App() {

  const [count, setCount] = useState<number>(0);


  function handleCount(type: string) {
    if (type === "add") {
      // setCount(count + 1);
      // setCount(count + 1);
      // setCount(count + 1); // 同一个操作，默认只会执行最后一个
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
    } else {
      setCount(count - 1);
    }
  }


  return <div>
    <div>
      <button onClick={() => handleCount('add')}>+</button>
      <span>{count}</span>
      <button onClick={() => handleCount('des')}>-</button>
    </div>
  </div>;
}