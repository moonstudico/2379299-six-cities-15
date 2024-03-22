import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOfferId, requireAuthorization, setError, setOfferLoadingStatus, setOffersDataLoadingStatus } from './action';
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
  isOfferLoadingStatus: boolean;

} = {
  currentCity: 'Paris',
  offers: [],
  offer: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  isOfferLoadingStatus: true

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
    })
    .addCase(setOfferLoadingStatus, (state, {payload}) => {
      state.isOfferLoadingStatus = payload;
    });
});
export {reducer, getOffers};
