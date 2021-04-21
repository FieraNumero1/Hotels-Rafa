import { createSlice } from '@reduxjs/toolkit';

export const endSlice = createSlice({
  name: 'end',
  initialState: {
    value: new Date().getTime(),
  },
  reducers: {
    setEnd: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setEnd } = endSlice.actions;

export const selectEnd = state => state.end.value;

export default endSlice.reducer;