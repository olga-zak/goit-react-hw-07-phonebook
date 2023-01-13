import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getFilterValue: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { getFilterValue } = filterSlice.actions;
export default filterSlice.reducer;
