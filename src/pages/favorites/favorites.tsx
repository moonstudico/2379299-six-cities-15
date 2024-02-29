import { Offer } from '../../types/offer';
import { City } from '../../types/city';
import FavoritesCity from '../favorites/favorites-city';

type Props = {
  favorites: Offer[];
  cities: City[];
}

function Favorites({favorites, cities}: Props): JSX.Element {

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">{
            cities.map((city) => (<FavoritesCity favorites={favorites} city={city} key={city} />))
          }
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
