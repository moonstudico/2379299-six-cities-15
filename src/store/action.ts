import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const changeCity = createAction<string>('сities/changeCity');

export const getOffers = createAction<Offer[]>('сities/addOffer');
