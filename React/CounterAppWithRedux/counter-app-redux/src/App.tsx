import { useDispatch, useSelector } from "react-redux";
import './App.css'
import {
  getIncreamentCounter,
  getDecreamentCounter,
  selectCount
} from './redux/reducers/countReducer'
// import { MouseEventHandler } from "react";
interface CountState {
  payload: number | undefined,
  type: string;
}

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(selectCount);
  // const handleIncreament: CountState = dispatch(getIncreamentCounter());
  // const handleDecreament = dispatch(getDecreamentCounter());
  console.log(counter)

  return (
    <div className="container">
      <div className="inner">
        <button
          className="buttonMinus"
          onClick={() => dispatch(getDecreamentCounter())}
        >
          -
        </button>
        <div className="counter">Counter : {counter}</div>
        <button
          className="buttonPlus"
          onClick={() => dispatch(getIncreamentCounter())}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App
