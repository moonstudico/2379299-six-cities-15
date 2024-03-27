import Locations from './locations';
import ListComponents from './list-components';
import { useState } from 'react';
import { SortType } from '../../const';


function MainPage(): JSX.Element {
  const [activeOfferSort, setSort] = useState<SortType>(SortType.Default);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Locations setSort={setSort}/>
      <ListComponents setSort={setSort} activeOfferSort={activeOfferSort}/>
    </main>
  );
}

export default MainPage;
