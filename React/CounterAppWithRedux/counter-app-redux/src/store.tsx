import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers/rootReducer";
// import { createEpicMiddleware } from "redux-observable";
// import { rootEpic } from "./epic/rootEpic";

// const epicMiddleware = createEpicMiddleware();
const AppReduxStore = configureStore({
  reducer: rootReducer()
});
// epicMiddleware.run(rootEpic);
export type AppDispatch = typeof AppReduxStore.dispatch;
export type RootState = ReturnType<typeof AppReduxStore.getState>;
export default AppReduxStore;
