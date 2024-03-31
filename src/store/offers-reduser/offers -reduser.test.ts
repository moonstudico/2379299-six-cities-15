import { HousingType } from '../../types/offer';
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
    const offers = [
      {
        id: '9772b366-ef03-4bc4-a728-2e885fc44eac',
        title: 'Tile House',
        type: 'room' as HousingType,
        price: 321,
        previewImage: 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
        city: {
          name: 'Amsterdam',
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13
          }
        },
        location: {
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
          zoom: 16
        },
        isFavorite: false,
        isPremium: false,
        rating: 1.5
      },
      {
        id: '2f47ca94-4d24-4425-9ae6-43d7333df736',
        title: 'House in countryside',
        type: 'room' as HousingType,
        price: 242,
        previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
        city: {
          name: 'Amsterdam',
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13
          }
        },
        location: {
          latitude: 52.3609553943508,
          longitude: 4.85309666406198,
          zoom: 16
        },
        isFavorite: false,
        isPremium: true,
        rating: 2.7
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

  it('execute getOfferId action', () => {

    const offer = {
      id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
      title: 'Beautiful & luxurious studio at great location',
      type: 'apartment' as HousingType,
      price: 120,
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8
        }
      },
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      },
      isFavorite: false,
      isPremium: false,
      rating: 4,
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      bedrooms: 3,
      goods: [
        'Heating'
      ],
      host: {
        name: 'Oliver Conner',
        avatarUrl: 'https://url-to-image/image.png',
        isPro: false
      },
      images: [
        'https://url-to-image/image.png'
      ],
      maxAdults: 4
    };

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
    const nearbyOffers = [
      {
        id: '9772b366-ef03-4bc4-a728-2e885fc44eac',
        title: 'Tile House',
        type: 'room' as HousingType,
        price: 321,
        previewImage: 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
        city: {
          name: 'Amsterdam',
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13
          }
        },
        location: {
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
          zoom: 16
        },
        isFavorite: false,
        isPremium: false,
        rating: 1.5
      },
      {
        id: '2f47ca94-4d24-4425-9ae6-43d7333df736',
        title: 'House in countryside',
        type: 'room' as HousingType,
        price: 242,
        previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
        city: {
          name: 'Amsterdam',
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13
          }
        },
        location: {
          latitude: 52.3609553943508,
          longitude: 4.85309666406198,
          zoom: 16
        },
        isFavorite: false,
        isPremium: true,
        rating: 2.7
      }
    ];
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
    const favoritesOffers = [
      {
        id: '9772b366-ef03-4bc4-a728-2e885fc44eac',
        title: 'Tile House',
        type: 'room' as HousingType,
        price: 321,
        previewImage: 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
        city: {
          name: 'Amsterdam',
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13
          }
        },
        location: {
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
          zoom: 16
        },
        isFavorite: false,
        isPremium: false,
        rating: 1.5
      },
      {
        id: '2f47ca94-4d24-4425-9ae6-43d7333df736',
        title: 'House in countryside',
        type: 'room' as HousingType,
        price: 242,
        previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
        city: {
          name: 'Amsterdam',
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13
          }
        },
        location: {
          latitude: 52.3609553943508,
          longitude: 4.85309666406198,
          zoom: 16
        },
        isFavorite: false,
        isPremium: true,
        rating: 2.7
      }
    ];
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
