import {Offer} from '../types/offer';


const favorites: Offer[] = [
  {
    id: '258e916e-b073-49d5-8806-e4e2fb3617a3',
    title: 'Tile House',
    type: 'apartment',
    price: 101,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: true,
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
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 5
  }
];

export {favorites};
