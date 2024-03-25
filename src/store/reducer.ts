import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getFavoritesOffers, getNearbyOffers, getOfferId, getReviews, requireAuthorization, setError, setNearbyOffersLoadingStatus, setOfferLoadingStatus, setOffersDataLoadingStatus } from './action';
import { getOffers} from './action';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../const';
import { ExtendedOffer } from '../types/extended offer';
import { Review } from '../types/review';

const initialState: {
  currentCity: string;
  offers: Offer[];
  offer: ExtendedOffer | null;
  nearbyOffers: Offer[];
  favoritesOffers: Offer[];
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
  error: null | string;
  isOffersDataLoading: boolean;
  isOfferLoadingStatus: boolean;
  isNearbyOffersLoadingStatus: boolean;

} = {
  currentCity: 'Paris',
  offers: [],
  offer: null,
  nearbyOffers: [],
  favoritesOffers: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  isOfferLoadingStatus: true,
  isNearbyOffersLoadingStatus: true

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
    .addCase(getNearbyOffers, (state, {payload}) => {
      state.nearbyOffers = payload;
    })
    .addCase(getFavoritesOffers, (state, {payload}) => {
      state.favoritesOffers = payload;
    })
    .addCase(getReviews, (state, {payload}) => {
      state.reviews = payload;
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
    })
    .addCase(setNearbyOffersLoadingStatus, (state, {payload}) => {
      state.isNearbyOffersLoadingStatus = payload;
    });
});
export {reducer, getOffers};
