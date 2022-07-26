import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./state";

// const rootReducer = combineReducers({
//   login, logout
// });

const store = configureStore({
  reducer: { authentication: authReducer },
});

export default store;
