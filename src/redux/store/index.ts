import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import patientReducer from "./slices/patientSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    patient: patientReducer,
  },
});

// TypeScript helpers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
