import { createSlice } from '@reduxjs/toolkit';
import { changeCity, changeOffer, getFavoritesOffers, getNearbyOffers, getOfferId, getReviews, getUserData, requireAuthorization, setError, setNearbyOffersLoadingStatus, setOfferLoadingStatus, setOffersDataLoadingStatus } from './action';
import { getOffers} from './action';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../const';
import { ExtendedOffer } from '../types/extended offer';
import { Review } from '../types/review';
import { UserData } from '../types/user-data';

const offersInitialState: {
  currentCity: string;
  offers: Offer[];
  offer: ExtendedOffer | null;
  nearbyOffers: Offer[];
  favoritesOffers: Offer[];
} = {
  currentCity: 'Paris',
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
      });
  }
});


const userInitialState: {
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;

} = {

  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null
};

export const userReduser = createSlice({
  name: 'userReduser',
  initialState: userInitialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(getReviews, (state, {payload}) => {
        state.reviews = payload;
      })
      .addCase(getUserData, (state, {payload}) => {
        state.userData = payload;
      })
      .addCase(requireAuthorization, (state, {payload}) => {
        state.authorizationStatus = payload;
      });
  }
});

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
