import Locations from './locations';
import {Offer} from '../../types/offer';
import { City } from '../../types/city';
import ListComponents from './list-components';

type MainPageProps = {
  placeCount: number;
  offers: Offer[];
  cities: City[];
}

function MainPage({placeCount, offers, cities}: MainPageProps): JSX.Element {

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Locations cities = {cities}/>
      <ListComponents placeCount={placeCount} offers={offers} />
    </main>
  );
}

export default MainPage;
