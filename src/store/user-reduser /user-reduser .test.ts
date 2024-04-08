import { AuthorizationStatus } from '../../const';
import { reviewsTest } from '../../mocks/test';
import { getReviews, getUserData, requireAuthorization } from '../action';
import { userReduser } from './user-reduser.ts ';

describe('userInitialState', () => {
  const initialState = {
    reviews: [],
    authorizationStatus: AuthorizationStatus.Unknown,
    userData: null,
    loading: false,
    error: null,
    reviewSuccess: false,
  };

  it('execute getReviews action', () => {
    const reviews = reviewsTest;
    const expectedResult = {
      reviews: reviews,
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: null,
      loading: false,
      error: null,
      reviewSuccess: false,
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
