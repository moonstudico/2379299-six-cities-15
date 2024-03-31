import { getOfferId, getOffers } from '../action';
import { offersReduser } from './offers -reduser';


describe('offersReduser', () => {
  const initialState = {
    offers: [],
    offer: null,
    nearbyOffers: [],
    favoritesOffers: []
  };

  it('execute setOffersDataLoadingStatus action', () => {
    const offers = [
      {
        id: 'ee47aec6-6983-4f54-acc5-03ba0e2f8e0e',
        title: 'Penthouse, 4-5 rooms + 5 balconies',
        type: 'house',
        price: 797,
        previewImage: 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
        city: {
          name: 'Paris',
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13
          }
        },
        location: {
          latitude: 48.868610000000004,
          longitude: 2.342499,
          zoom: 16
        },
        isFavorite: false,
        isPremium: false,
        rating: 3.1
      },
      {
        id: 'cf8b1b8f-8f23-43b7-b4a7-989882d1ea49',
        title: 'Amazing and Extremely Central Flat',
        type: 'hotel',
        price: 491,
        previewImage: 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
        city: {
          name: 'Paris',
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13
          }
        },
        location: {
          latitude: 48.858610000000006,
          longitude: 2.330499,
          zoom: 16
        },
        isFavorite: false,
        isPremium: false,
        rating: 1.6
      }
    ];
    const expectedResult = {
      offers: offers,
      offer: null,
      nearbyOffers: [],
      favoritesOffers: []
    };
    const result = offersReduser.reducer(initialState, getOffers(offers));

    expect(result).toEqual(expectedResult);
  });

  it('execute setOffersDataLoadingStatus action', () => {
    const offers = [1, 2, 3];
    const expectedResult = {
      offers: offers,
      offer: null,
      nearbyOffers: [],
      favoritesOffers: []
    };
    const result = offersReduser.reducer(initialState, getOfferId(offers));

    expect(result).toEqual(expectedResult);
  });
});
