import { AppThunkDispatch } from '../types/app-thunk-dispatch';
import { getOfferId, getOffers, getUserData, requireAuthorization, setError, setOfferLoadingStatus, setOffersDataLoadingStatus } from './action';
import { checkAuthAction, fetchOfferIdAction, fetchOffersAction, loginAction, logoutAction } from './api-actions';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../types/state';
import { Action } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { APIRoute } from '../const';
import { extractActionsTypes } from '../mocks';
import { createAPI } from '../services/api';
import { makeOfferTest, makeOffersTest } from '../mocks/test';
import { AuthData } from '../types/auth-data';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({offers: {offers: []}});
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending", "requireAuthorization", "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        requireAuthorization.type,
        checkAuthAction.fulfilled.type,
      ]);
    });
  });

  describe('fetchOffersAction', () => {
    it('should dispatch "fetchOffersAction.pending", "getOffers", "setOffersDataLoadingStatus", "fetchOffersAction.fulfilled", when server response 200', async() => {
      const mockOffers = [makeOffersTest()];
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffers);

      await store.dispatch(fetchOffersAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchOffersAction.pending.type,
        setOffersDataLoadingStatus.type,
        setOffersDataLoadingStatus.type,
        getOffers.type,
        fetchOffersAction.fulfilled.type,
      ]);
    });
  });

  it('should dispatch "fetchOffersAction.pending", "setOffersDataLoadingStatus", "fetchOffersAction.rejected" when server response 400', async () => {
    mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

    await store.dispatch(fetchOffersAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      setOffersDataLoadingStatus.type,
      fetchOffersAction.rejected.type,
    ]);
  });

  describe('fetchOfferIdAction', () => {
    it('should dispatch "fetchOfferIdAction.pending", "setOfferLoadingStatus", "getOfferId", "fetchOfferIdAction.fulfilled", when server response 200', async() => {
      const offerId = '123';
      const mockOffer = [makeOfferTest()];
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${offerId}`).reply(200, mockOffer);

      await store.dispatch(fetchOfferIdAction(offerId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchOfferIdAction.pending.type,
        setOfferLoadingStatus.type,
        getOfferId.type,
        setOfferLoadingStatus.type,
        fetchOfferIdAction.fulfilled.type,
      ]);
    });
  });

  it('should dispatch "fetchOfferIdAction.pending", "setOfferLoadingStatus", "fetchOfferIdAction.rejected" when server response 400', async () => {
    const offerId = '123';
    mockAxiosAdapter.onGet(`${APIRoute.Offers}/${offerId}`).reply(400);

    await store.dispatch(fetchOfferIdAction(offerId));

    const emittedActions = store.getActions();
    const actions = extractActionsTypes(emittedActions);
    expect(actions).toEqual([
      fetchOfferIdAction.pending.type,
      setOfferLoadingStatus.type,
      setError.type,
      setOfferLoadingStatus.type,
      fetchOfferIdAction.rejected.type
    ]);
  });

  describe('loginAction', () => {
    it('should dispatch "loginAction.pending", "getUserData", "requireAuthorization", "loginAction.fulfilled" when server response 200', async() => {
      const fakeUser: AuthData = { login: 'test@test.ru', password: '123456' };
      const fakeServerReply = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReply);

      await store.dispatch(loginAction(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        getUserData.type,
        requireAuthorization.type,
        loginAction.fulfilled.type,
      ]);
    });
  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async() => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        requireAuthorization.type,
        logoutAction.fulfilled.type,
      ]);
    });
  });
});
