import { useReducer } from 'react'


interface Data {
  count: number
}

interface Action {
  type: string
}


export default function App() {


  function reducer(state: Data, action: Action) {
    switch(action.type) {
      case 'add': 
        return { count: state.count + 1 }
      case 'sub': 
      return { count: state.count - 1 }
      default:
        return state
    }
  }

  const initialState = { count: 0 }


  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
      <button onClick={() => dispatch({ type: 'sub' })}>-</button>
    </div>
  )
}