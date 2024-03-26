import { memo } from 'react';
import { SortType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hock';
import { changeCity } from '../../store/action';
import { City } from '../../types/city';
import { Link } from 'react-router-dom';

type Props = {
  cities: City [];
  setSort: (str: SortType) => void ;
}

function Locations({cities, setSort}: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.currentCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city) => (
              <li key={city} className="locations__item">
                <Link className={`locations__item-link tabs__item ${currentCity === city ? 'tabs__item--active' : ''}`} to="#">
                  <span
                    onClick={() =>{
                      dispatch(changeCity(city));
                      setSort(SortType.Default);
                    }}

                  >{city}
                  </span>
                </Link>
              </li>)
            )
          }
        </ul>
      </section>
    </div>
  );
}

export default memo(Locations);

