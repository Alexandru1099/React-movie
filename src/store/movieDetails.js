import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    name: '',
    title: '',
    photo: '',
    context: '',
    releses: '',
    content: '',
    runtime: '',
    starring: '',
}
const dataSlice = createSlice({
  name: "movieDetail",
  initialState: initialState,
  reducers: {
    getData(state, params) {
        const {payload} = params;
      state.data = [...state.data, payload];
    },
  },
});

export const { getData } = dataSlice.actions;

export default dataSlice.reducer;
