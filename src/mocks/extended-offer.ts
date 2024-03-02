import { ExtendedOffer } from '../types/extended offer';

const extendedOffers : ExtendedOffer = {
  id: '9772b366-ef03-4bc4-a728-2e885fc44eac',
  title: 'Tile House',
  type: 'apartment',
  price: 321,
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
  isFavorite: true,
  isPremium: false,
  rating: 1.5,
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  bedrooms: 3,
  goods: ['Heating'],
  host: {
    name: 'Oliver Conner',
    avatarUrl: 'img/avatar-angelina.jpg',
    isPro: false
  },
  images: ['https://15.design.htmlacademy.pro/static/hotel/14.jpg', 'https://15.design.htmlacademy.pro/static/hotel/15.jpg'],
  maxAdults: 4
};

export {extendedOffers};
