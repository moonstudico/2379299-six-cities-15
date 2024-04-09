import { AuthorizationStatus } from '../../const';
// import { UserData, reviewsTest } from '../../mocks/test';
// import { requireAuthorization } from '../action';
import {
  // checkAuthAction,
  fetchReviewsOffersAction,
  // loginAction,
  // logoutAction,
  // saveReviewAction,
} from '../api-actions';
import { userReduser } from './user-reduser';

describe('userReduser', () => {
  const initialState = {
    reviews: [],
    loading: false,
    error: null,
    authorizationStatus: AuthorizationStatus.Unknown,
    userData: null,
    reviewSuccess: false,
  };

  it('should handle fetchReviewsOffersAction.pending', () => {
    const action = { type: fetchReviewsOffersAction.pending.type };
    const expectedResult = {
      ...initialState,
      loading: true,
      error: null,
    };
    const result = userReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });
/**
  it('should handle fetchReviewsOffersAction.fulfilled', () => {
    const mockReviews = reviewsTest;
    const action = {
      type: fetchReviewsOffersAction.fulfilled.type,
      payload: mockReviews,
    };
    const expectedResult = {
      ...initialState,
      loading: false,
      reviews: reviewsTest,
    };
    const result = userReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle fetchReviewsOffersAction.rejected', () => {
    const mockError = 'Error';
    const action = {
      type: fetchReviewsOffersAction.rejected.type,
      payload: mockError,
    };
    const expectedResult = {
      ...initialState,
      loading: false,
      reviews: null,
      error: mockError,
    };
    const result = userReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle saveReviewAction.pending', () => {
    const action = { type: saveReviewAction.pending.type };
    const expectedResult = {
      ...initialState,
      loading: true,
      error: null,
      reviewSuccess: false,
    };
    const result = userReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle saveReviewAction.fulfilled', () => {
    const mockReviews = reviewsTest;
    const action = {
      type: saveReviewAction.fulfilled.type,
      payload: mockReviews,
    };
    const expectedResult = {
      ...initialState,
      loading: false,
      reviewSuccess: true,
      reviews: [...initialState.reviews, mockReviews],
    };
    const result = userReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle saveReviewAction.rejected', () => {
    const mockError = 'Error';
    const action = { type: saveReviewAction.rejected.type, payload: mockError };
    const expectedResult = {
      ...initialState,
      loading: false,
      reviewSuccess: false,
      error: mockError,
    };
    const result = userReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle checkAuthAction.fulfilled', () => {
    const mockUserData = UserData;
    const action = { type: checkAuthAction.fulfilled.type };
    const expectedResult = {
      ...initialState,
      authorizationStatus: AuthorizationStatus.Auth,
      userData: mockUserData,
    };
    const result = userReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle checkAuthAction.rejected', () => {
    const mockError = 'Error';
    const action = { type: saveReviewAction.rejected.type, payload: mockError };
    const expectedResult = {
      ...initialState,
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: null,
    };
    const result = userReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle loginAction.fulfilled', () => {
    const mockUserData = UserData;
    const action = { type: loginAction.fulfilled.type, payload: mockUserData };
    const expectedResult = {
      ...initialState,
      authorizationStatus: AuthorizationStatus.Auth,
      userData: mockUserData,
    };
    const result = userReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle loginAction.rejected', () => {
    const action = { type: loginAction.rejected.type };
    const expectedResult = {
      ...initialState,
      authorizationStatus: AuthorizationStatus.NoAuth,
    };
    const result = userReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle logoutAction.fulfilled', () => {
    const action = { type: logoutAction.fulfilled.type };
    const expectedResult = {
      ...initialState,
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: null,
    };
    const result = userReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle logoutAction.fulfilled', () => {
    const action = { type: logoutAction.fulfilled.type };
    const expectedResult = {
      ...initialState,
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: null,
    };
    const result = userReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle authorization status being set to AUTH', () => {
    const action = requireAuthorization(AuthorizationStatus.Auth);
    const state = userReduser.reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      authorizationStatus: AuthorizationStatus.Auth,
    });
  });

  it('should handle authorization status being set to NO_AUTH', () => {
    const action = requireAuthorization(AuthorizationStatus.NoAuth);
    const state = userReduser.reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      authorizationStatus: AuthorizationStatus.NoAuth,
    });
  });

  it('should handle authorization status being set to UNKNOWN', () => {
    const action = requireAuthorization(AuthorizationStatus.Unknown);
    const state = userReduser.reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      authorizationStatus: AuthorizationStatus.Unknown,
    });
  });

  **/
});
