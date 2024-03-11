import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const changeCity = createAction<string>('Cities/changeCity');

export const getOffersByCity = createAction<Offer[]>('Cities/addOffer');
