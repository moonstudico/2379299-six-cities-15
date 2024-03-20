import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const changeCity = createAction<string>('сities/changeCity');

export const getOffers = createAction<Offer[]>('сities/getOffer');

export const requireAuthorization = createAction<string>('user/requireAvtorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setError = createAction<string>('сities/setError');
