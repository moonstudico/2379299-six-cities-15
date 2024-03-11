import { useAppDispatch, useAppSelector } from '../../hock';
import { changeCity } from '../../store/action';
import { City } from '../../types/city';
import { Link } from 'react-router-dom';

type Props = {
  cities: City [];
}

function Locations({cities}: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.currentСity);
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city) => (
              <li key={city} className="locations__item">
                <Link className="locations__item-link tabs__item" to="#">
                  <span
                    onClick={() =>{
                      dispatch(changeCity(city));


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

export default Locations;

