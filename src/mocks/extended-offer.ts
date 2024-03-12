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
  },
  {
    id: '55475dcb-15d6-49ba-8202-4d9b1e9e68fd',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 392,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.236402000000005,
      longitude: 6.784314,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
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
  },
  {
    id: 'e519a70a-d1a6-4cd2-9a19-68796833a60a',
    title: 'The house among olive ',
    type: 'room',
    price: 296,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.210402,
      longitude: 6.798314,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
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
  },


  {
    id: '8dd0cb60-1a02-418c-8f44-4340ae57c8f4',
    title: 'House in countryside',
    type: 'apartment',
    price: 491,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.211402,
      longitude: 6.756314000000001,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.2,
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
  },
  {
    id: '879aeef0-d851-4852-835e-2acd844b9a58',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'room',
    price: 233,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.228402,
      longitude: 6.784314,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.6,
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
  },
  {
    id: '1caa1e25-d922-44d4-897a-59b99678dc25',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 325,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.87861,
      longitude: 2.357499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
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
  },
  {
    id: 'a82961a8-137e-4e33-b0c7-994b03f73fe3',
    title: 'The house among olive ',
    type: 'room',
    price: 221,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.877610000000004,
      longitude: 2.333499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.1,
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
  },
  {
    id: 'cc026f30-b209-4e30-8922-017cd49e79bf',
    title: 'House in countryside',
    type: 'room',
    price: 277,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.83961,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.7,
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
  },
  {
    id: 'a3039060-ee31-49e2-9c21-0b64347aa027',
    title: 'Canal View Prinsengracht',
    type: 'house',
    price: 989,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.950361,
      longitude: 6.961974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
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
  },
  {
    id: '636054b8-5dc6-476e-aa1f-a07b220bcc6e',
    title: 'The house among olive ',
    type: 'room',
    price: 167,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.932361,
      longitude: 6.937974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
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
  },
  {
    id: 'b8201595-761a-4a91-96b1-148f0b44f389',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 123,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.934361,
      longitude: 6.943974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.5,
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
  },
  {
    id: 'd8b45376-31cd-4ea8-b774-b60e4fbc3aee',
    title: 'House in countryside',
    type: 'house',
    price: 343,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.947361,
      longitude: 6.9799739999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.9,
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
  },
  {
    id: 'b8f0d51d-00a1-4a8a-b8aa-2749b9a687c4',
    title: 'The house among olive ',
    type: 'house',
    price: 252,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.960361,
      longitude: 6.967974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.1,
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
  },
  {
    id: '013f8ce9-8c67-44a4-a98d-a19db3854f48',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 211,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.854557,
      longitude: 4.364697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.6,
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
  },
  {
    id: '54be2d8c-e898-4f7b-b5cc-24e0790db350',
    title: 'The Joshua Tree House',
    type: 'hotel',
    price: 119,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.867557,
      longitude: 4.371696999999999,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.2,
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
  },
  {
    id: 'b86620aa-19d2-47de-b744-12c0df8a54f8',
    title: 'Tile House',
    type: 'room',
    price: 253,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.827557,
      longitude: 4.336697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
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
  },
  {
    id: '9fcbf7de-e823-486c-b650-e820e0817187',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 329,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.833557,
      longitude: 4.374696999999999,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.4,
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
  },
  {
    id: '00c55954-2165-4621-9e5f-7db6e12e10d3',
    title: 'Waterfront with extraordinary view',
    type: 'apartment',
    price: 289,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.837557,
      longitude: 4.339697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.3,
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
  },
  {
    id: '8fd8c97d-0d15-4ae3-9beb-37d3e20bad67',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'apartment',
    price: 367,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.849557,
      longitude: 4.374696999999999,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.7,
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
  },
  {
    id: '24c09ef5-6ba7-4ae8-9837-6ad411142186',
    title: 'The Joshua Tree House',
    type: 'hotel',
    price: 383,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.852557,
      longitude: 4.3376969999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.7,
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
  },
  {
    id: '09542bf6-7275-4d5f-b303-f70c9f55ff5b',
    title: 'The house among olive ',
    type: 'hotel',
    price: 306,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.828556999999996,
      longitude: 4.362697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.3,
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
  },
  {
    id: '55721442-f4c0-4866-a03c-8420f0e93ec7',
    title: 'Wood and stone place',
    type: 'house',
    price: 556,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.835556999999994,
      longitude: 4.354697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.6,
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
  },
  {
    id: 'b4d65de6-3bb1-40ff-9678-1770de602474',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 182,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.570341000000006,
      longitude: 9.975654,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.2,
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
  },
  {
    id: 'e9a4465c-2912-4dab-8ae7-a6e6cb1c4df3',
    title: 'House in countryside',
    type: 'hotel',
    price: 486,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.558341000000006,
      longitude: 10.001654,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.3,
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
  },
  {
    id: 'e51293c3-e724-46a9-9554-bd243fddfaa3',
    title: 'The Pondhouse - A Magical Place',
    type: 'room',
    price: 272,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.573341000000006,
      longitude: 10.009654000000001,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.7,
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
  },
  {
    id: '8a4c1a15-a9b0-4be1-84ce-eef27a26438d',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 183,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.573341000000006,
      longitude: 9.994654,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
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
  },
  {
    id: '11512109-635a-4984-be46-b3e6f1885f94',
    title: 'The Pondhouse - A Magical Place',
    type: 'apartment',
    price: 224,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.528341000000005,
      longitude: 9.982654,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
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
  },
  {
    id: '261302d3-6390-41a5-8654-ca01acf8191e',
    title: 'The Pondhouse - A Magical Place',
    type: 'hotel',
    price: 489,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.540341000000005,
      longitude: 10.025654000000001,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.6,
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
  },
  {
    id: '9504e1bb-4028-4033-938b-51937123cf35',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'room',
    price: 222,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.555341000000006,
      longitude: 9.975654,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2,description: 'This charming studio is located in the heart of Paris, within walking distance to the Louvre and Notre Dame. Perfect for couples seeking a romantic getaway.',
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
