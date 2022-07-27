import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./state";
import dataReducer from "./movieDetails"

const store = configureStore({
  reducer: { authentication: authReducer, data: dataReducer },
});

export default store;
