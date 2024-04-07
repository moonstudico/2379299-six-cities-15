import { createSlice } from '@reduxjs/toolkit';
import { ExtendedOffer } from '../../types/extended offer';
import { Offer } from '../../types/offer';
import { changeOffer, getFavoritesOffers, getNearbyOffers, getOfferId, getOffers } from '../action';
import { logoutAction } from '../api-actions';

const offersInitialState: {
  offers: Offer[];
  offer: ExtendedOffer | null;
  nearbyOffers: Offer[];
  favoritesOffers: Offer[];
} = {
  offers: [],
  offer: null,
  nearbyOffers: [],
  favoritesOffers: []
};

export const offersReduser = createSlice({
  name: 'offersReduser',
  initialState: offersInitialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(getOffers, (state, {payload}) => {
        state.offers = payload;
      })
      .addCase(changeOffer, (state, {payload}) => {
        state.offers = state.offers.map((offer) => {
          if (offer.id === payload.id){
            return {...offer, isFavorite: payload.isFavorite};
          }
          return offer;
        });

        if (state.offer && state.offer.id === payload.id) {
          state.offer = { ...state.offer, isFavorite: payload.isFavorite };
        }
        state.nearbyOffers = state.nearbyOffers.map((nearbyOffer) => {
          if (nearbyOffer.id === payload.id){
            return {...nearbyOffer, isFavorite: payload.isFavorite};
          }
          return nearbyOffer;
        });

        const favoritesIndex = state.favoritesOffers.findIndex((offer) => offer.id === payload.id);
        if (favoritesIndex === -1){
          state.favoritesOffers.push (payload);
        } else {
          state.favoritesOffers.splice(favoritesIndex, 1);
        }
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
      .addCase(logoutAction.fulfilled, (state) => {
        state.favoritesOffers = [];
      });
  }
});
