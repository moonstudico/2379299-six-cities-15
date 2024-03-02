import { ExtendedOffer } from '../../types/extended offer';
import { Review } from '../../types/review';
import Host from './host';
import UseReviews from './user-reviews';
import ContainerOffers from './container-offers';
import GaleriContaner from './galeri-contaner';
import { useParams } from 'react-router-dom';
import {Navigate} from 'react-router-dom';

type Props = {
  extendedOffers: ExtendedOffer[];
  reviews: Review;
}

function OfferPage({extendedOffers, reviews}: Props): JSX.Element {

  const location = useParams();
  const extendedOffer = extendedOffers.find((item) => item.id === location.id);
  if (extendedOffer){
    const {isPremium, title, rating, type, bedrooms, maxAdults, price} = extendedOffer;
    return (
      <main className="page__main page__main--offer">
        <section className="offer">
          <GaleriContaner extendedOffer = {extendedOffer}/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>{isPremium}</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">
                    Wi-Fi
                  </li>
                  <li className="offer__inside-item">
                    Washing machine
                  </li>
                  <li className="offer__inside-item">
                    Towels
                  </li>
                  <li className="offer__inside-item">
                    Heating
                  </li>
                  <li className="offer__inside-item">
                    Coffee machine
                  </li>
                  <li className="offer__inside-item">
                    Baby seat
                  </li>
                  <li className="offer__inside-item">
                    Kitchen
                  </li>
                  <li className="offer__inside-item">
                    Dishwasher
                  </li>
                  <li className="offer__inside-item">
                    Cabel TV
                  </li>
                  <li className="offer__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>
              <Host />
              <UseReviews reviews = {reviews}/>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <ContainerOffers />
      </main>
    );
  } else {
    return <Navigate to="/not-found" />;
  }
}

export default OfferPage;
