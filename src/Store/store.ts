import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/userReducer";
import formReducer from "./Reducers/formReducer";

export const store = configureStore({
  reducer: {
    users: userReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
