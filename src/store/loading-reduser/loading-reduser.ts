import { createSlice } from '@reduxjs/toolkit';
import { setError, setNearbyOffersLoadingStatus, setOfferLoadingStatus, setOffersDataLoadingStatus } from '../action';

const loadingInitialState: {
  error: null | string;
  isOffersDataLoading: boolean;
  isOfferLoadingStatus: boolean;
  isNearbyOffersLoadingStatus: boolean;
} = {
  error: null,
  isOffersDataLoading: false,
  isOfferLoadingStatus: true,
  isNearbyOffersLoadingStatus: true,
};

export const loadingReduser = createSlice({
  name: 'loadingReduser',
  initialState: loadingInitialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(setError, (state, {payload}) => {
        state.error = payload;
      })
      .addCase(setOffersDataLoadingStatus, (state, {payload}) => {
        state.isOffersDataLoading = payload;
      })
      .addCase(setOfferLoadingStatus, (state, {payload}) => {
        state.isOfferLoadingStatus = payload;
      })
      .addCase(setNearbyOffersLoadingStatus, (state, {payload}) => {
        state.isNearbyOffersLoadingStatus = payload;
      });
  }
});
