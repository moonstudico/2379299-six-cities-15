import { createSlice } from '@reduxjs/toolkit';
import { changeCity } from '../action';

const cityInitialState: {
  currentCity: string;
} = {
  currentCity: 'Paris',
};


export const cityReduser = createSlice({
  name: 'cityReduser',
  initialState: cityInitialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(changeCity, (state, {payload}) => {
        state.currentCity = payload;
      });
  }
});
