import Locations from './locations';
import {Offer} from '../../types/offer';
import { City } from '../../types/city';
import ListComponents from './list-components';

type MainPageProps = {
  offers: Offer[];
  cities: City[];
}

function MainPage({offers, cities}: MainPageProps): JSX.Element {

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Locations cities = {cities}/>
      <ListComponents offers={offers} />
    </main>
  );
}

export default MainPage;
