import countReducerSlice from "./countReducer";

const rootReducer = () => {
  return {
    counter: countReducerSlice,
  };
};

export default rootReducer;
