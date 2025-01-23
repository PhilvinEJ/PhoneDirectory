import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./reducers/auth/authenticationReducer";
import contactsReducer from "./reducers/contacts/contactsReducer";

export const reduxStore = configureStore({
  reducer: {
    authentication: authenticationReducer,
    contacts: contactsReducer,
  },
  // middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export type AppDispatch = typeof reduxStore.dispatch;
