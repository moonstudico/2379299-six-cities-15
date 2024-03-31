import { AuthorizationStatus } from '../../const';
import { getReviews, getUserData, requireAuthorization } from '../action';
import { userReduser } from './user-reduser.ts ';

describe('userInitialState', () => {
  const initialState = {
    reviews: [],
    authorizationStatus: AuthorizationStatus.Unknown,
    userData: null
  };

  it('execute getReviews action', () => {
    const reviews = [
      {
        id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
        date: '2019-05-08T14:13:56.569Z',
        user: {
          name: 'Oliver Conner',
          avatarUrl: 'https://url-to-image/image.png',
          isPro: false
        },
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        rating: 4
      }
    ];
    const expectedResult = {
      reviews: reviews,
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: null
    };
    const result = userReduser.reducer(initialState, getReviews(reviews));

    expect(result).toEqual(expectedResult);
  });

  it('execute requireAuthorization action', () => {

    const expectedResult = {
      reviews: [],
      authorizationStatus: AuthorizationStatus.Auth,
      userData: null
    };
    const result = userReduser.reducer(initialState, requireAuthorization(AuthorizationStatus.Auth));

    expect(result).toEqual(expectedResult);
  });

  it('execute getUserData action', () => {
    const userData = {
      id: 123456789,
      email: 'HTMLAcademy@mail.ru',
      token: 'b67ddfd5-b953',
      avatarUrl: 'https://url-to-image/image.png',

    };
    const expectedResult = {
      reviews: [],
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: userData
    };
    const result = userReduser.reducer(initialState, getUserData(userData));

    expect(result).toEqual(expectedResult);
  });
});
