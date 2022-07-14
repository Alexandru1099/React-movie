import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authentication',
  initialState: false,
  reducers: {
    logout(state) {
      state.authentication = false;
    },
    login(state) {
      state.authentication = true;
    }
  }
});
const store = configureStore({
  reducer: { auth: authSlice.reducer },
})

// const authActions = authSlice.actions;

export default store;
