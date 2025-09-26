import { useEffect, useRef, forwardRef } from "react"

/**
 * useRef
 * forwardRef
 */

const Child: React.ForwardRefRenderFunction<HTMLInputElement> = (props, ref) => {
    return <div>
      <input ref={ref} />
    </div>
}


const ChildCom = forwardRef(Child)



function App() {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        console.log('inputRef', inputRef.current)
        inputRef.current?.focus()
    }, []);

    return (
        <div>
            <ChildCom ref={inputRef} />
        </div>
    )
}

export default App