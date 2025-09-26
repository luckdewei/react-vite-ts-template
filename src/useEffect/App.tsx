import { useEffect, useState } from "react";


async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(666);
    }, 2000);
  })
  return data;
}

export default function App() {


  const [num, setNum] = useState<number>(0);
  useEffect(() => {
    // console.log("xxxxx");
    queryData().then(data => {
      setNum(data);
    })
  }, []);
  

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(num);
    }, 1000);

    return () => {
      console.log('clean up')
      clearInterval(timer);
    }
  }, [num])

  return (
    <div onClick={() => setNum((prevNum: number) => prevNum + 1)}>{num}</div>
  );
}