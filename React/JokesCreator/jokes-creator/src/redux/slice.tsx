import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { JokeType, JokesStateType } from "./types";
const initialState: JokesStateType = {
  joke: { data: null, isLoading: false, errors: "" },
};
export const jokeSlice = createSlice({
  name: "jokes",
  initialState: initialState,

  reducers: {
    getJokeAction: (state: JokesStateType) => {
      state.joke.isLoading = true;
      state.joke.errors = "";
    },
    getJokesSuccessAction: (state: JokesStateType, { payload: joke }: PayloadAction<JokeType>) => {
        console.log(joke, "joke")
      state.joke.isLoading = false;
      state.joke.data = joke;
    },
    getJokesErrorAction:  (state: JokesStateType, { payload: error }: PayloadAction<string>) => {
        state.joke.isLoading = false;
        state.joke.errors = error
    }
  }
  
});

export const {
    getJokeAction,
    getJokesSuccessAction,
    getJokesErrorAction
} = jokeSlice.actions;

export default jokeSlice.reducer;

