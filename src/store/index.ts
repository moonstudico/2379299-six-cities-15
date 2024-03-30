import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cityReduser, loadingReduser, offersReduser, userReduser } from './reducer';
import { createAPI } from '../services/api';


const rootReducer = combineReducers({
  offers: offersReduser.reducer,
  user: userReduser.reducer,
  city: cityReduser.reducer,
  loading: loadingReduser.reducer,
});


export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk:{
        extraArgument: api,
      },
    }),
});

