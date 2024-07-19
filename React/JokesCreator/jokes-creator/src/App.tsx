import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJokeAction } from "./redux/slice";
import { StateType } from "./redux/root-reducer";
import './App.css'

const App = () => {

  const { joke } = useSelector((state: StateType) => state.jokes);
  console.log(joke, "dat2");
  const dispatch = useDispatch();

  const handleRequest = () => {
    dispatch(getJokeAction());
  };
  return (
    <div className="container">
      {joke.isLoading ?
      <div className="loading">Loading...</div> : (
      <div>
      <div className="joke">Your Joke</div>
      <div>{joke.data?.joke}</div>
      <button className="button" onClick={handleRequest}>Get New Joke</button>
      </div>
      )}
    </div>
  );
}

export default App
