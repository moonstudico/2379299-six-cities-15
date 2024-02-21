import MainPage from '../../pages/main-page';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Offer from '../../pages/offer';
import NotFoundPage from '../../pages/not-found-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const.ts';


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
          path={AppRoute.Main}
          element={<Login />}
        />
        <Route
          path={AppRoute.Main}
          element={<Favorites />}
        />
        <Route
          path={AppRoute.Main}
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
