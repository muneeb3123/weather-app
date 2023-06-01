import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const DetailSlice = createSlice({
  name: 'Details',
  initialState,
  reducers: {
    selectCity: (state, action) => ({ ...state, data: action.payload }),
  },
});

export const { selectCity } = DetailSlice.actions;

export default DetailSlice.reducer;
