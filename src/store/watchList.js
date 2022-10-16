import { createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
  name: "watchList",
  initialState: { watchList: [] },
  reducers: {
    addWatchList(state, movie) {
      state.watchList = [...state.watchList, movie];
    },
  },
});

export const { addWatchList } = watchListSlice.actions;

export default watchListSlice.reducer;
