import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOfferId, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import { getOffers} from './action';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../const';

const initialState: {
  currentCity: string;
  offers: Offer[];
  offer: Offer | null;
  authorizationStatus: AuthorizationStatus;
  error: null | string;
  isOffersDataLoading: boolean;

} = {
  currentCity: 'Paris',
  offers: [],
  offer: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false

};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, {payload}) => {
      state.currentCity = payload;
    })
    .addCase(getOffers, (state, {payload}) => {
      state.offers = payload;
    })
    .addCase(getOfferId, (state, {payload}) => {
      console.log('statepayload', payload)
      state.offer = payload;
    })
    .addCase(requireAuthorization, (state, {payload}) => {
      state.authorizationStatus = payload;
    })
    .addCase(setError, (state, {payload}) => {
      state.error = payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, {payload}) => {
      state.isOffersDataLoading = payload;
    });
});
export {reducer, getOffers};
