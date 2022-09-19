import { useReducer } from "react";
import reducer from "./CounterReducer";
import { incrementAction, decrementAction } from "./CounterAction";

function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>Counter:{state}</h1>
      <button onClick={() => dispatch(incrementAction)}>Add</button>
      <button onClick={() => dispatch(decrementAction)}>Reduce</button>
    </>
  );
}
export default Counter;
