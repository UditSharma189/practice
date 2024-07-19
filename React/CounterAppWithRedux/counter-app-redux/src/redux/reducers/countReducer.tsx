
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
// const initialState  = {count: 0};

// const countReducer = (state = initialState, actions: { type: string}) => {
//   switch (actions.type) {
//     case "INCREAMENT":
//       return {
//         count: state.count + 1,
//       };
//     case "DECREAMENT":
//       return {
//         count: state.count - 1,
//       };
//     default:
//       state;
//   }
// };
export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
};
export const countReducerSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getIncreamentCounter: (state: any) => {
      state.value += 1;
    },
    getDecreamentCounter: (state: any) => {
      state.value -= 1;
    },
  },
});

export const { getIncreamentCounter, getDecreamentCounter } =
  countReducerSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;
export default countReducerSlice.reducer;
