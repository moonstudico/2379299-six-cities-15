import OfferCard from '../../component/offer-card';
import { Offer } from '../../types/offer';
import { useEffect, useState } from 'react';
import Map from '../../component/map';
import { getOffers } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hock';
import Sort from './sort';

type Props = {
  offers: Offer[];
}

function ListComponents ({offers}: Props): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getOffers(offers));
  }, [offers, dispatch]);

  const [activeCardId, setActiveCardId] = useState<string>();
  const [activeOfferSort, setSort] = useState<string>();
  const currentOffers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === state.currentCity));
  switch (activeOfferSort) {
    case 'low to high':
      currentOffers.sort((a, b) => a.price - b.price);
      break;
    case 'high to low':
      currentOffers.sort((a, b) => b.price - a.price);
      break;
    case 'Top rated first':
      currentOffers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

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
            <Sort setSort={setSort} />
          </form>
          <div className="cities__places-list places__list tabs__content">
            {
              currentOffers.map((offer) => <OfferCard offer={offer} key={offer.id} setActiveCardId={setActiveCardId} activeCardId={activeCardId} className="cities"/>)
            }
          </div>
        </section>
        <div className="cities__right-section">
          {
            currentOffers[0]?.city &&
            <Map currentCity={currentOffers[0].city} points={currentOffers} activeCardId={activeCardId} className="cities" />
          }

        </div>
      </div>
    </div>
  );
}

export default ListComponents;
