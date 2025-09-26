import { useEffect, useRef, forwardRef, useImperativeHandle } from "react"


interface RefProps {
  aaa: () => void;
}

const Child: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      aaa() {
        inputRef.current?.focus();
      }
    }
  }, [inputRef]);
    return <div>
      <input ref={inputRef} />
    </div>
}


const ChildCom = forwardRef(Child)



function App() {
    const ref = useRef<RefProps>(null)

    useEffect(() => {
        console.log('inputRef', ref.current)
        ref.current?.aaa();
    }, []);

    return (
        <div>
            <ChildCom ref={ref} />
        </div>
    )
}

export default App