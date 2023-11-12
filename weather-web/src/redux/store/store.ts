import { configureStore } from "@reduxjs/toolkit";
import submenuReducer from "../slices/submenuSlice";

export const store = configureStore({
  reducer: {
    submenu: submenuReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
