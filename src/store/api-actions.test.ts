import { AppThunkDispatch } from '../types/app-thunk-dispatch';
import { requireAuthorization } from './action';
import { checkAuthAction } from './api-actions';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../types/state';
import { Action } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { APIRoute } from '../const';
import { extractActionsTypes } from '../mocks';
import { createAPI } from '../services/api';

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

  // describe('fetchOffersAction', () => {
  //   it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.fulfilled", when server response 200', async() => {
  //     const mockOffers = [];
  //     mockAxiosAdapter.onGet(APIRoute.Questions).reply(200, mockQuestions);

  //     await store.dispatch(fetchQuestionAction());

  //     const emittedActions = store.getActions();
  //     const extractedActionsTypes = extractActionsTypes(emittedActions);
  //     const fetchQuestionsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchQuestionAction.fulfilled>;

  //     expect(extractedActionsTypes).toEqual([
  //       fetchQuestionAction.pending.type,
  //       fetchQuestionAction.fulfilled.type,
  //     ]);

  //     expect(fetchQuestionsActionFulfilled.payload)
  //       .toEqual(mockQuestions);
  //   });


  // export const fetchOffersAction = createAsyncThunk<void, undefined, {
  //   dispatch: AppDispatch;
  //   state: State;
  //   extra: AxiosInstance;
  // }>(
  //   'data/fetchOffers',
  //   async(_arg, {dispatch, extra: api}) => {
  //     dispatch(setOffersDataLoadingStatus(true));
  //     const {data} = await api.get<Offer[]>(APIRoute.Offers);
  //     dispatch(setOffersDataLoadingStatus(false));
  //     dispatch(getOffers(data));
  //   },
  // );



});
