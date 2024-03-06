import { ExtendedOffer } from '../types/extended offer';

const extendedOffers : ExtendedOffer[] = [
  {
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
      avatarUrl: 'https://loremflickr.com/320/240/people?random=89',
      isPro: false
    },
    images: ['https://15.design.htmlacademy.pro/static/hotel/14.jpg', 'https://15.design.htmlacademy.pro/static/hotel/15.jpg'],
    maxAdults: 4
  },
  {
    id: '2f47ca94-4d24-4425-9ae6-43d7333df736',
    title: 'House in countryside',
    type: 'apartment',
    price: 242,
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
    isPremium: true,
    rating: 2.7,
    description: 'Lovely place in the heart of the countryside, perfect for a quiet getaway.',
    bedrooms: 2,
    goods: ['Dishwasher', 'Parking', 'Wi-Fi'],
    host: {
      name: 'Alice Jones',
      avatarUrl: 'https://loremflickr.com/320/240/people?random=829',
      isPro: true
    },
    images: ['https://15.design.htmlacademy.pro/static/hotel/16.jpg', 'https://15.design.htmlacademy.pro/static/hotel/17.jpg'],
    maxAdults: 3
  },
  {
    id: '258e916e-b073-49d5-8806-e4e2fb3617a3',
    title: 'Tile House',
    type: 'apartment',
    price: 101,
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
    isFavorite: false,
    isPremium: false,
    rating: 2,
    description: 'Cozy apartment in the city center, close to all the attractions.',
    bedrooms: 1,
    goods: ['Cable TV', 'Coffee machine'],
    host: {
      name: 'Max Johnson',
      avatarUrl: 'https://loremflickr.com/320/240/people?random=824',
      isPro: false
    },
    images: ['https://15.design.htmlacademy.pro/static/hotel/18.jpg', 'https://15.design.htmlacademy.pro/static/hotel/19.jpg'],
    maxAdults: 2
  },
  {
    id: 'f431d956-6b7f-4aa4-839e-d57743638b28',
    title: 'Tile House',
    type: 'room',
    price: 216,
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
    isFavorite: false,
    isPremium: true,
    rating: 5,
    description: 'This charming studio is located in the heart of Paris, within walking distance to the Louvre and Notre Dame. Perfect for couples seeking a romantic getaway.',
    bedrooms: 1,
    goods: ['Free Wi-Fi', 'Kitchen', 'Dishwasher', 'Cable TV'],
    host: {
      name: 'Jean Dupont',
      avatarUrl: 'https://loremflickr.com/320/240/people?random=821',
      isPro: true
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/21.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/22.jpg'
    ],
    maxAdults: 2
  }
];

const getOfferById = (offerId?: string) => (extendedOffers.find((item) => item.id === offerId));
const getNearbyOffers = (offerId?: string) => (extendedOffers.filter((item) => item.id !== offerId));
export {getOfferById, getNearbyOffers};
