import OfferCard from '../../component/offer-card';
import { Offer } from '../../types/offer';
import { useState } from 'react';
import Map from '../../component/map';

type Props = {
  placeCount: number;
  offers: Offer[];
}

function ListComponents ({placeCount, offers}: Props): JSX.Element{
  const [activeCardId, setActiveCardId] = useState<string>();

  return(
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found"> {placeCount} places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {
              offers.map((offer) => <OfferCard offer={offer} key={offer.id} setActiveCardId={setActiveCardId}/>)
            }
          </div>
        </section>
        <div className="cities__right-section">

          <section className="cities__map map">
            <Map currentCity={offers[0].city} points = {offers} activeCardId = {activeCardId}/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ListComponents;
