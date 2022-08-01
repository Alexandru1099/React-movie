import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./state";
import movieDetailReducer from "./movieDetails";
import searchMovieReducer from './searchMovie';

const store = configureStore({
  reducer: {
    authentication: authReducer, 
    movieDetail: movieDetailReducer,
    searchMovie:  searchMovieReducer},
});

export default store;
