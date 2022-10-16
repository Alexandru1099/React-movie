import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: '',
}
const searchMovieSlice = createSlice({
  name: "searchMovie",
  initialState: initialState,
  reducers: {
    searchMovies(state, params) {
      state.movies = params;
    },
  },
});

export const { searchMovies } = searchMovieSlice.actions;

export default searchMovieSlice.reducer;
