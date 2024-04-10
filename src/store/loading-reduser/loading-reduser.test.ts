import { fetchNearbyOffersAction, fetchOfferIdAction, fetchOffersAction } from '../api-actions';
import { loadingReduser } from './loading-reduser';

describe('loadingReduser', () => {
  const initialState = {
    error: null,
    isOffersDataLoading: false,
    isOfferLoadingStatus: false,
    isNearbyOffersLoadingStatus: false,
  };

  it('should handle fetchOffersAction.pending', () => {
    const action = { type: fetchOffersAction.pending.type };
    const expectedResult = {
      ...initialState,
      isOffersDataLoading: true,
    };
    const result = loadingReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle fetchOffersAction.fulfilled', () => {
    const action = { type: fetchOffersAction.fulfilled.type };
    const expectedResult = {
      ...initialState,
      isOffersDataLoading: false,
    };
    const result = loadingReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle fetchOfferIdAction.pending', () => {
    const action = { type: fetchOfferIdAction.pending.type };
    const expectedResult = {
      ...initialState,
      isOfferLoadingStatus: true,
    };
    const result = loadingReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle fetchOfferIdAction.fulfilled', () => {
    const action = { type: fetchOfferIdAction.fulfilled.type };
    const expectedResult = {
      ...initialState,
      isOfferLoadingStatus: false,
    };
    const result = loadingReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle fetchOfferIdAction.rejected', () => {
    const mockError = 'Failed to fetch offer';
    const action = {
      type: fetchOfferIdAction.rejected.type,
      payload: mockError,
    };
    const expectedResult = {
      ...initialState,
      isOfferLoadingStatus: false,
      error: mockError
    };
    const result = loadingReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });

  it('should handle fetchNearbyOffersAction.pending', () => {
    const action = { type: fetchNearbyOffersAction.pending.type };
    const expectedResult = {
      ...initialState,
      isNearbyOffersLoadingStatus: true,
    };
    const result = loadingReduser.reducer(initialState, action);

    expect(result).toEqual(expectedResult);
  });
});
