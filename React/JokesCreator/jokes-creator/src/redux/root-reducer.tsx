import { JokesStateType } from "./types";
import jokeReducer from "./slice";

export type StateType = {
  // Reducers types here
  jokes: JokesStateType
};

const rootReducers = {
  // Reducers here
  jokes: jokeReducer,
};

export default rootReducers;
