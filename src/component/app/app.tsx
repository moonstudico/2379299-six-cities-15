import MainPage from '../../pages/main-page';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Offer from '../../pages/offer';
import NotFoundPage from '../../pages/not-found-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import PrivateRoute from '../../component/private-route';
import Layout from '../layout';
import {getAuthorizationStatus} from '../../mocks.ts';

type AppProps = {
  placeCount: number;
}

function App ({placeCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path={AppRoute.Main}
            element={<MainPage placeCount = {placeCount} />}
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
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer />}
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
