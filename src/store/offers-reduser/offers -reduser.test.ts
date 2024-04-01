import { offerTest, offersTest } from '../../mocks/test';
import { getFavoritesOffers, getNearbyOffers, getOfferId, getOffers } from '../action';
import { offersReduser } from './offers -reduser';


describe('offersReduser', () => {
  const initialState = {
    offers: [],
    offer: null,
    nearbyOffers: [],
    favoritesOffers: []
  };

  it('execute getOffers action', () => {
    const offers = offersTest;
    const expectedResult = {
      offers: offers,
      offer: null,
      nearbyOffers: [],
      favoritesOffers: []
    };
    const result = offersReduser.reducer(initialState, getOffers(offers));

    expect(result).toEqual(expectedResult);
  });

  it('execute getOfferId action', () => {

    const offer = offerTest;

    const expectedResult = {
      offers: [],
      offer: offer,
      nearbyOffers: [],
      favoritesOffers: []
    };
    const result = offersReduser.reducer(initialState, getOfferId(offer));

    expect(result).toEqual(expectedResult);
  });

  it('execute getNearbyOffers action', () => {
    const nearbyOffers = offersTest;
    const expectedResult = {
      offers: [],
      offer: null,
      nearbyOffers: nearbyOffers,
      favoritesOffers: []
    };
    const result = offersReduser.reducer(initialState, getNearbyOffers(nearbyOffers));

    expect(result).toEqual(expectedResult);
  });

  it('execute getFavoritesOffers action', () => {
    const favoritesOffers = offersTest;
    const expectedResult = {
      offers: [],
      offer: null,
      nearbyOffers: [],
      favoritesOffers: favoritesOffers
    };
    const result = offersReduser.reducer(initialState, getFavoritesOffers(favoritesOffers));

    expect(result).toEqual(expectedResult);
  });

});
