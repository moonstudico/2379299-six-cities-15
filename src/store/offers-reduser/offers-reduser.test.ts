import {
  favoriteTrue,
  offerTest,
  offersFavoritesTest,
  offersTest,
} from '../../mocks/test';
import {
  fetchFavoritesOffersAction,
  fetchNearbyOffersAction,
  fetchOfferIdAction,
  fetchOffersAction,
  logoutAction,
  saveFavoritesOffersAction,
} from '../api-actions';
import { offersReduser } from './offers-reduser';

describe('offersReduser', () => {
  const initialState = {
    offers: [],
    offer: null,
    nearbyOffers: [],
    favoritesOffers: [],
  };

  it('should handle fetchOffersAction.fulfilled', () => {
    const mockOffers = offersTest;
    const action = {
      type: fetchOffersAction.fulfilled.type,
      payload: mockOffers,
    };
    const expectedResult = {
      ...initialState,
      offers: mockOffers,
    };
    const result = offersReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle saveFavoritesOffersAction.fulfilled', () => {
    const initialStateWithOffers = {
      offers: offersTest,
      offer: offerTest,
      nearbyOffers: offersTest,
      favoritesOffers: offersFavoritesTest,
    };

    const mockFavorite = { ...favoriteTrue, isFavorite: true };
    const action = {
      type: saveFavoritesOffersAction.fulfilled.type,
      payload: mockFavorite,
    };

    const updatedOffers = initialStateWithOffers.offers.map((offer) =>
      offer.id === mockFavorite.id ? { ...offer, isFavorite: mockFavorite.isFavorite } : offer
    );

    const updatedNearbyOffers = initialStateWithOffers.nearbyOffers.map((offer) =>
      offer.id === mockFavorite.id ? { ...offer, isFavorite: mockFavorite.isFavorite } : offer
    );

    const updatedFavoritesOffers = mockFavorite.isFavorite
      ? [...initialStateWithOffers.favoritesOffers, mockFavorite]
      : initialStateWithOffers.favoritesOffers.filter((offer) => offer.id !== mockFavorite.id);

    const expectedState = {
      ...initialStateWithOffers,
      offers: updatedOffers,
      offer: offerTest.id === mockFavorite.id ? { ...offerTest, isFavorite: mockFavorite.isFavorite } : offerTest,
      nearbyOffers: updatedNearbyOffers,
      favoritesOffers: updatedFavoritesOffers,
    };

    const result = offersReduser.reducer(initialStateWithOffers, action);

    expect(result).toEqual(expectedState);
  });

  it('should handle fetchOfferIdAction.fulfilled', () => {
    const mockOffer = offerTest;
    const action = {
      type: fetchOfferIdAction.fulfilled.type,
      payload: mockOffer,
    };
    const expectedResult = {
      ...initialState,
      offer: mockOffer,
    };
    const result = offersReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle fetchNearbyOffersAction.fulfilled', () => {
    const mockOffers = offersTest;
    const action = {
      type: fetchNearbyOffersAction.fulfilled.type,
      payload: mockOffers,
    };
    const expectedResult = {
      ...initialState,
      nearbyOffers: mockOffers,
    };
    const result = offersReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle fetchFavoritesOffersAction.fulfilled', () => {
    const mockOffers = offersFavoritesTest;
    const action = {
      type: fetchFavoritesOffersAction.fulfilled.type,
      payload: mockOffers,
    };
    const expectedResult = {
      ...initialState,
      favoritesOffers: mockOffers,
    };
    const result = offersReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle logoutAction.fulfilled', () => {
    const mockOffers = offersFavoritesTest;
    const action = { type: logoutAction.fulfilled.type, payload: mockOffers };
    const expectedResult = {
      ...initialState,
      favoritesOffers: [],
    };
    const result = offersReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });
});
