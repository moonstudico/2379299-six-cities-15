import { setError, setNearbyOffersLoadingStatus, setOfferLoadingStatus, setOffersDataLoadingStatus } from '../action';
import { loadingReduser } from './loading-reduser';

describe('loadingReduser', () => {
  const initialState = {
    error: null,
    isOffersDataLoading: false,
    isOfferLoadingStatus: true,
    isNearbyOffersLoadingStatus: true,
  };

  it('execute setError action', () => {
    const payload = 'Test error message';

    const expectedResult = {
      error: payload,
      isOffersDataLoading: false,
      isOfferLoadingStatus: true,
      isNearbyOffersLoadingStatus: true,
    };

    const result = loadingReduser.reducer(initialState, setError(payload));

    expect(result).toEqual(expectedResult);
  });

  it('execute setOffersDataLoadingStatus action', () => {
    const expectedResult = {
      error: null,
      isOffersDataLoading: true,
      isOfferLoadingStatus: true,
      isNearbyOffersLoadingStatus: true,
    };
    const result = loadingReduser.reducer(initialState, setOffersDataLoadingStatus(true));

    expect(result).toEqual(expectedResult);
  });

  it('execute setOfferLoadingStatus action', () => {
    const expectedResult = {
      error: null,
      isOffersDataLoading: false,
      isOfferLoadingStatus: false,
      isNearbyOffersLoadingStatus: true,
    };
    const result = loadingReduser.reducer(initialState, setOfferLoadingStatus(false));

    expect(result).toEqual(expectedResult);
  });

  it('execute setNearbyOffersLoadingStatus action', () => {
    const expectedResult = {
      error: null,
      isOffersDataLoading: false,
      isOfferLoadingStatus: false,
      isNearbyOffersLoadingStatus: false,
    };
    const result = loadingReduser.reducer(initialState, setNearbyOffersLoadingStatus(false));

    expect(result).toEqual(expectedResult);
  });
});

