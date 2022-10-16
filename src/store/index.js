import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./state";
import movieDetailReducer from "./movieDetails";
import searchMovieReducer from "./searchMovie";
import watchListReducer from "./watchList";

const store = configureStore({
  reducer: {
    authentication: authReducer,
    movieDetail: movieDetailReducer,
    searchMovie: searchMovieReducer,
    watchList: watchListReducer,
  },
});

export default store;
