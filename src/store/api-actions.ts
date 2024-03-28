import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { changeOffer, getFavoritesOffers, getNearbyOffers, getOfferId, getOffers, getReviews, getUserData, requireAuthorization, setError, setOfferLoadingStatus, setOffersDataLoadingStatus } from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { store } from '.';
import { ExtendedOffer } from '../types/extended offer';
import { UserReview } from '../types/userReview';
import { Review } from '../types/review';
import { StatusFavorite } from '../types/statusFavorites';


export const clearErrorAction = createAsyncThunk(
  'сities/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async(_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(getOffers(data));
  },
);

export const fetchReviewsOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/fetchReviewsOffers',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Review []>(`${APIRoute.Review}/${id}`);
    dispatch(getReviews(data));
  },
);


export const saveReviewAction = createAsyncThunk<void, UserReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/saveReview',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    await api.post<UserReview>(`${APIRoute.Review}/${id}`, {comment, rating});
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(fetchReviewsOffersAction(id as string));
  },
);

export const fetchFavoritesOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/fetchFavoritesOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer []>(APIRoute.Favorites);
    dispatch(getFavoritesOffers(data));
  },
);

export const saveFavoritesOffersAction = createAsyncThunk<void, StatusFavorite, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/saveFavoritesOffers',
  async ({id, isFavorite}, {dispatch, extra: api}) => {
    console.log('isFavorite status',isFavorite)
    const (www: {data} ) = await api.post<UserReview>(`${APIRoute.Favorites}/${id}/${isFavorite}`);
    console.log(1111111, data );
    // dispatch(changeOffer(www.data ))

     dispatch(fetchFavoritesOffersAction());
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async(id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer []>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(getNearbyOffers (data));
  },
);

export const fetchOfferIdAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferId',
  async(id, {dispatch, extra: api}) => {
    dispatch(setOfferLoadingStatus(true));
    try{
      const {data} = await api.get<ExtendedOffer>(`${APIRoute.Offers}/${id}`);
      dispatch(getOfferId(data));
    }catch{
      dispatch(getOfferId(null));
    }
    dispatch(setOfferLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async(_arg, {dispatch, extra: api}) => {
    try{
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }catch{
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try{
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      dispatch(getUserData(data));
      saveToken(data.token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }catch{
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
