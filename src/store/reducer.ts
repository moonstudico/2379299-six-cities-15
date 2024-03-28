import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeOffer, getFavoritesOffers, getNearbyOffers, getOfferId, getReviews, getUserData, requireAuthorization, setError, setNearbyOffersLoadingStatus, setOfferLoadingStatus, setOffersDataLoadingStatus } from './action';
import { getOffers} from './action';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../const';
import { ExtendedOffer } from '../types/extended offer';
import { Review } from '../types/review';
import { UserData } from '../types/user-data';

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
  userData: UserData | null;

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
  isNearbyOffersLoadingStatus: true,
  userData: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, {payload}) => {
      state.currentCity = payload;
    })
    .addCase(getOffers, (state, {payload}) => {
      state.offers = payload;
    })
    // changeExtendedOffer
    .addCase(changeOffer, (state, {payload}) => {
      state.offers = state.offers.map((offer) => {
        if (offer.id === payload.id){
          return payload;
        }
        return offer;
      });
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
    .addCase(getUserData, (state, {payload}) => {
      state.userData = payload;
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
