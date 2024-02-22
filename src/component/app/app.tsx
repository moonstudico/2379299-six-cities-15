import MainPage from '../../pages/main-page';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Offer from '../../pages/offer';
import NotFoundPage from '../../pages/not-found-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AuthorizationStatus, AppRoute} from '../../const.ts';
import PrivateRoute from '../../component/private-route';

type AppProps = {
  placeCount: number;
}

function App ({placeCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage placeCount = {placeCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
