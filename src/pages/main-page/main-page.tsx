import Locations from './locations';
import ListComponents from './list-components';
import { useState } from 'react';
import { SortType } from '../../const';
import { useAppSelector } from '../../hock';


function MainPage(): JSX.Element {
  const [activeOfferSort, setSort] = useState<SortType>(SortType.Default);
  const allOffers = useAppSelector((state) => state.offers.offers);
  return (
    <main className={`page__main page__main--index ${allOffers.length > 0 ? '' : 'page__main--index-empty'} `}>
      <h1 className="visually-hidden">Cities</h1>
      <Locations setSort={setSort}/>
      <ListComponents setSort={setSort} activeOfferSort={activeOfferSort} allOffers={allOffers}/>
    </main>
  );
}

export default MainPage;
