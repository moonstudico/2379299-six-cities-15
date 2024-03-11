import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';

const initialState = {
  defaultСity: 'Paris',
  listPlaces: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state) =>{
      console.log('изменение города ---->', state.defaultСity, 'изменение предложений по городу---->', state.listPlaces)
    });
});

export {reducer};
