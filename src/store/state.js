import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: false,
  reducers: {
    logout(state) {
      state.authentication = false;
    },
    login(state) {
      state.authentication = true;
    },
  },
});

export const {login, logout} = authSlice.actions;

export default  authSlice.reducer; 
