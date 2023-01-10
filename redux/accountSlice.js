import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: "no-session",
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.session = action.payload;
    },
    clearSession: (state, action) => {
      state.session = "no-session";
    },
  },
});

export const { setSession, clearSession } = accountSlice.actions;

export function getSession(state) {
  return state.session;
}
