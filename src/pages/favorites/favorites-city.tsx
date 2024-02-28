import { Link } from 'react-router-dom';
import CityItem from './city-item';
import { Offer } from '../../types/offer';
import { City } from '../../types/city';

type Props = {
  favorites: Offer[];
  city: City;
}

function FavoritesCity({favorites, city}: Props): JSX.Element | null {

  const favoritesCity = favorites.filter((favorit) => favorit.city.name === city);

  return (

    (favoritesCity.length > 0) ? (
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
            favoritesCity.map((favorit) => <CityItem favorit = {favorit} key = {favorit.id}/>)

          }
        </div>
      </li>
    ) : null
  );
}

export default FavoritesCity;
