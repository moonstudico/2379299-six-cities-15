import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../const';
import { ExtendedOffer } from '../types/extended offer';
import { Review } from '../types/review';
import { UserData } from '../types/user-data';

export const changeCity = createAction<string>('сities/changeCity');

export const getOffers = createAction<Offer[]>('сities/getOffers');

export const changeOffer = createAction<Offer>('сities/changeOffer');

export const getOfferId = createAction<ExtendedOffer | null>('сities/getOfferId');

export const getNearbyOffers = createAction<Offer[]>('сities/getNearbyOffers');

export const getFavoritesOffers = createAction<Offer[]>('сities/getFavoritesOffers');

export const getReviews = createAction<Review[]>('сities/getReviews ');

export const getUserData = createAction<UserData>('getUserData');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAvtorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setOfferLoadingStatus = createAction<boolean>('data/setOfferLoadingStatus');

export const setNearbyOffersLoadingStatus = createAction<boolean>('data/setNearbyOffersLoadingStatus');

export const setError = createAction<string | null>('сities/setError');
