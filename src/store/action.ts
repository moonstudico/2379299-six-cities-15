import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction<string>('сities/changeCity');

export const getOffers = createAction<Offer[]>('сities/getOffers');

export const getOfferId = createAction<Offer | null>('сities/getOfferId');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAvtorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setOfferLoadingStatus = createAction<boolean>('data/setOfferLoadingStatus');

export const setError = createAction<string | null>('сities/setError');
