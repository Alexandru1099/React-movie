import { createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
  name: "watchList",
  initialState: { watchList: [] },
  reducers: {
    addWatchList(state, movie) {
      //   const newMovie = movie.payload;
      //   const existingMovie = state.watchList.find(
      //     (movie) => movie.id === newMovie.id
      //   );
      //   console.log(newMovie);
      //   console.log(state.watchList.watchList);
      //   alert(existingMovie);
      state.watchList = [...state.watchList, movie];
    },
  },
});

export const { addWatchList } = watchListSlice.actions;

export default watchListSlice.reducer;
