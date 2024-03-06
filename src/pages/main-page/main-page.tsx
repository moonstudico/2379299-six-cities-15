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
  const [selectedPoint, setSelectedPoint] = useState({});

  const handleListItemHover = (listItemName) => {};

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Locations cities = {cities} onListItemHover={handleListItemHover}/>
      <ListComponents placeCount={placeCount} offers={offers}/>
    </main>
  );
}

export default MainPage;
