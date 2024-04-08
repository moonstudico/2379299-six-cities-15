import { createSlice } from '@reduxjs/toolkit';
import { setError, setNearbyOffersLoadingStatus, setOfferLoadingStatus} from '../action';
import { fetchOffersAction } from '../api-actions';

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
      // .addCase(setOffersDataLoadingStatus, (state, {payload}) => {
      //   state.isOffersDataLoading = payload;
      // })
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state) => {
        state.isOffersDataLoading = false;
      })

      .addCase(setOfferLoadingStatus, (state, {payload}) => {
        state.isOfferLoadingStatus = payload;
      })
      .addCase(setNearbyOffersLoadingStatus, (state, {payload}) => {
        state.isNearbyOffersLoadingStatus = payload;
      });
  }
});
