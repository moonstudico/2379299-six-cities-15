import {Offer} from '../types/offer';

const offers: Offer[] = [
  {
    id: '9772b366-ef03-4bc4-a728-2e885fc44eac',
    title: 'Tile House',
    type: 'apartment',
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
    type: 'apartment',
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
  },
  {
    id: '258e916e-b073-49d5-8806-e4e2fb3617a3',
    title: 'Tile House',
    type: 'apartment',
    price: 101,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
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
      longitude: 4.929309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2
  },
  {
    id: 'f431d956-6b7f-4aa4-839e-d57743638b28',
    title: 'Tile House',
    type: 'room',
    price: 216,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 5
  }
];

export {offers};

