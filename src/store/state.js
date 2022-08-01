import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: { authentication: false },
  reducers: {
    logout(state) {
      state.authentication = false;
    },
    login(state) {
      state.authentication = true;
    },
  },
});

export const { logout, login } = authSlice.actions;

export default authSlice.reducer;
