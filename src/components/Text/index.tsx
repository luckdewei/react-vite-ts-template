interface Props {
  text: string;
  callback: (text: string) => void;
}

const Text: React.FC<Props> = (props) => {
  // 父子数据传递的第二种方式
  const event = new Event("text-click");

  const clickTap = () => {
    // event.stopPropagation();
    dispatchEvent(event);
  };
  return (
    <div>
      <span>{props.text}</span>
      <button onClick={() => props.callback("copy")}>点击</button>

      <button onClick={clickTap}>点击触发event</button>
    </div>
  );
};

export default Text;
