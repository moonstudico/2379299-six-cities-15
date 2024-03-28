import { Link } from 'react-router-dom';
import CityItem from './city-item';
import { Offer } from '../../types/offer';
import { City } from '../../types/city';

type Props = {
  favorites: Offer[];
  city: City;
}

function FavoritesCity({favorites, city}: Props): JSX.Element | null {

  const currentFavorites = favorites.filter((favorite) => favorite.city.name === city);

  return (

    (favorites.length > 0) ? (
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="#">
              <span>{city}</span>
            </Link>
          </div>
        </div>
        <div className="favorites__places">
          {
            currentFavorites.map((favorit) => <CityItem favorit = {favorit} key = {favorit.id}/>)
          }
        </div>
      </li>
    ) : null
  );
}

export default FavoritesCity;
