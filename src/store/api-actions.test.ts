import { AppThunkDispatch } from '../types/app-thunk-dispatch';
import { getOffers, getUserData, requireAuthorization, setOffersDataLoadingStatus } from './action';
import { checkAuthAction, fetchOffersAction, loginAction } from './api-actions';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../types/state';
import { Action } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { APIRoute } from '../const';
import { extractActionsTypes } from '../mocks';
import { createAPI } from '../services/api';
import { makeOffersTest } from '../mocks/test';
import { AuthData } from '../types/auth-data';
import { store } from '.';
import { saveToken } from '../services/token';

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
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
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
    it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.fulfilled", when server response 200', async() => {
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

  it('should dispatch "fetchQuestionAction.pending", "fetchQuestionAction.rejected" when server response 400', async () => {
    mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

    await store.dispatch(fetchOffersAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      setOffersDataLoadingStatus.type,
      fetchOffersAction.rejected.type,
    ]);
  });
  describe('loginAction', () => {
    it('should dispatch "loginAction.pending", "redirectToRoute", "loginAction.fulfilled" when server response 200', async() => {
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
});
