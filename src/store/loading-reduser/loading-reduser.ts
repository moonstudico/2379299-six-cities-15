import { createSlice } from '@reduxjs/toolkit';
import { fetchNearbyOffersAction, fetchOfferIdAction, fetchOffersAction } from '../api-actions';

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
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })

      .addCase(fetchOffersAction.fulfilled, (state) => {
        state.isOffersDataLoading = false;
      })

      .addCase(fetchOfferIdAction.pending, (state) => {
        state.isOfferLoadingStatus = true;
      })

      .addCase(fetchOfferIdAction.fulfilled, (state) => {
        state.isOfferLoadingStatus = false;
      })

      .addCase(fetchOfferIdAction.rejected, (state) => {
        state.isOfferLoadingStatus = false;
        state.error = 'Failed to fetch offer';
      })

      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isNearbyOffersLoadingStatus = true;
      });
  }
});
