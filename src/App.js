
import './App.css';
import {useSelector, useDispatch} from "react-redux"
function App() {
   const count = useSelector(state => state.count)
  return (
    <div className="App">
    <h2>Counter</h2>
          <button onClick={''}>Increment</button>
           <button onClick={""}>Decrement</button>
          <b>{count}</b>

    </div>
  );
}

export default App;
