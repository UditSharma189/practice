import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { JokeType, GET_JOKES } from "./types";
import { getJokesErrorAction, getJokesSuccessAction } from "./slice";

// Generator function
function* getUserSaga() {
  try {
    // You can also export the axios call as a function.
    const response: AxiosResponse<JokeType> = yield axios.get(
      'https://sv443.net/jokeapi/v2/joke/Programming?type=single'
    );
    yield put(getJokesSuccessAction(response.data));
  } catch (error: any) {
    yield put(getJokesErrorAction(error));
  }
}

// Generator function
export function* watchGetUser() {
  yield takeLatest(GET_JOKES, getUserSaga);
}
