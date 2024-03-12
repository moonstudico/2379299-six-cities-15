import OfferCard from '../../component/offer-card';
import { Offer } from '../../types/offer';
import { useState } from 'react';
import Map from '../../component/map';
import { getOffers } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hock';

type Props = {
  offers: Offer[];
}

function ListComponents ({offers}: Props): JSX.Element{
  const [activeCardId, setActiveCardId] = useState<string>();
  const dispatch = useAppDispatch();
  dispatch(getOffers(offers));
  // const allOffers = useAppSelector((state) => state.offers);
  const currentOffers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === state.currentCity));

  return(
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found"> {currentOffers.length} places to stay in Amsterdam</b>
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
              currentOffers.map((offer) => <OfferCard offer={offer} key={offer.id} setActiveCardId={setActiveCardId} className="cities"/>)
            }
          </div>
        </section>
        <div className="cities__right-section">
          <Map currentCity={currentOffers[0].city} points = {currentOffers} activeCardId = {activeCardId} className="cities" />
        </div>
      </div>
    </div>
  );
}

export default ListComponents;
