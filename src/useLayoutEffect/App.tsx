
import { useState, useLayoutEffect } from "react";

export default function App() {

  const [num, setNum] = useState<number>(0);


  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  }, [num]);

  return (
    <>
      <div>
        <div onClick={() => setNum((prevNum: number) => prevNum + 1)}>{num}</div>
      </div>
    </>
  )
}