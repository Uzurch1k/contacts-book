import { createSlice } from '@reduxjs/toolkit';

export const selectNameFilter = state => state.filters.name;

const filtersInitialState = {
  name: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
