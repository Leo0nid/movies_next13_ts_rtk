import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  yearUpComing: 0,
  monthUpComing: '',
};

const searchSlice = createSlice({
  name: 'upComing',
  initialState,
  reducers: {
    setYearUpComing: (state, action) => {
      state.yearUpComing = action.payload;
      
    },
    setMonthUpComing: (state,action) => {
      state.monthUpComing = action.payload;
    },
  },
});

export const { setYearUpComing ,setMonthUpComing } = searchSlice.actions;

export default searchSlice.reducer;
