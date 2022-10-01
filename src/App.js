import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <br />
      <button onClick={() => dispatch(signIn())}>
        {isLogged ? "Hide" : "Show"} sensitive information
      </button>
      {isLogged && <h3>Valueable information I shouldn't see</h3>}
    </div>
  );
}

export default App;
