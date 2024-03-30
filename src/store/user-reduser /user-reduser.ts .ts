import { createSlice } from '@reduxjs/toolkit';
import { getReviews, getUserData, requireAuthorization } from '../action';
import { AuthorizationStatus } from '../../const';
import { UserData } from '../../types/user-data';
import { Review } from '../../types/review';

const userInitialState: {
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;

} = {

  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null
};

export const userReduser = createSlice({
  name: 'userReduser',
  initialState: userInitialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(getReviews, (state, {payload}) => {
        state.reviews = payload;
      })
      .addCase(getUserData, (state, {payload}) => {
        state.userData = payload;
      })
      .addCase(requireAuthorization, (state, {payload}) => {
        state.authorizationStatus = payload;
      });
  }
});
