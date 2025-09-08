import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  userId: string;
  orgId: string;
  apiKey: string;
  appVersion: string;
  appVersionCode: string;
  apiVersion: string;
  token?: string; // optional cookie or auth token
}

const initialState: AuthState = {
  userId: "1000596100",
  orgId: "614",
  apiKey: "de3f1c39f8c03a3401303fdeb9748668",
  appVersion: "0.0.30-DEBUG",
  appVersionCode: "56",
  apiVersion: "v3",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<Partial<AuthState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
