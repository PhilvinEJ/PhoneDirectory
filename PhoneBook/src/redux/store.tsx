import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./reducers/auth/authenticationReducer";

export const reduxStore = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
  // middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export type AppDispatch = typeof reduxStore.dispatch;
