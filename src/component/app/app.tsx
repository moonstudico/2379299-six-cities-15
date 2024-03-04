import MainPage from '../../pages/main-page';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import OfferPage from '../../pages/offer-page';
import NotFoundPage from '../../pages/not-found-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import PrivateRoute from '../../component/private-route';
import Layout from '../layout';
import {getAuthorizationStatus} from '../../mocks.ts';
import {Offer} from '../../types/offer.ts';
import { City } from '../../types/city.ts';
import { Review } from '../../types/review.ts';

type AppProps = {
  placeCount: number;
  offers: Offer[];
  favorites: Offer[];
  cities: City[];
  reviews: Review[];
}
function App ({placeCount, offers, favorites, cities, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path={AppRoute.Main}
            element={
              <MainPage
                placeCount = {placeCount}
                offers = {offers}
                cities = {cities}
              />
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute
                authorizationStatus={getAuthorizationStatus()} isReverse
              >
                <Login />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={getAuthorizationStatus()}
              >
                <Favorites
                  favorites = {favorites}
                  cities = {cities}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={
              <OfferPage
                reviews = {reviews}
                offers = {offers}
              />
            }
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

