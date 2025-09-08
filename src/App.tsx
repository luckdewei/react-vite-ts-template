import { useState, useEffect } from "react";
import Text from "./components/Text";
import "./index.css";

function App() {
  const [text] = useState("hahaha");

  const fn = (str: string) => {
    alert("xxx" + str);
  };

  const [count, setCount] = useState(0);

  const op = (type: string) => {
    if (type == "add") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  console.log("change");

  useEffect(() => {
    const handleTextClick = () => {
      console.log("监听到了事件触发");
    };

    addEventListener("text-click", handleTextClick);

    // 清理函数，移除事件监听器
    return () => {
      removeEventListener("text-click", handleTextClick);
    };
  }, []); // 空依赖数组确保事件监听器只添加一次
  return (
    <>
      <Text text={text} callback={fn} />
      <div>
        <button onClick={() => op("des")}>-</button>
        <span className="op-text">{count}</span>
        <button onClick={() => op("add")}>+</button>
      </div>
    </>
  );
}

export default App;
