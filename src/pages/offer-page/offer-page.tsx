import Host from './host';
import UserReviews from './user-reviews';
import ContainerOffers from './container-offers';
import GaleriContaner from './galeri-contaner';
import { useParams } from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import OfferInside from './offer-inside';
import Map from '../../component/map';
import { useAppDispatch, useAppSelector } from '../../hock';
import { fetchNearbyOffersAction, fetchOfferIdAction, fetchReviewsOffersAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import { useEffect } from 'react';


function OfferPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchOfferIdAction(id));
      dispatch(fetchNearbyOffersAction(id));
      dispatch(fetchReviewsOffersAction(id));
    }
  }, [id, dispatch]);

  const extendedOffer = useAppSelector((state) => state.offer);
  const nearbyOffer = useAppSelector((state) => state.nearbyOffers);
  const reviews = useAppSelector((state) => state.reviews);
  const isOfferLoading = useAppSelector((state) => state.isOfferLoadingStatus);
  if (isOfferLoading) {
    return <LoadingScreen />;
  }

  if (!extendedOffer){
    return <Navigate to="/not-found" replace/>;
  }

  const {isPremium, title, rating, type, bedrooms, maxAdults, price} = extendedOffer;
  const roundedRating = Math.round(rating);
  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <GaleriContaner extendedOffer = {extendedOffer}/>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {
              isPremium ?
                (
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                ) : null
            }
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
                <span style={{width: `${roundedRating * 20}% `}}></span>
                <span className="visually-hidden">{roundedRating}</span>
              </div>
              <span className="offer__rating-value rating__value">
                { Math.round(rating)}
              </span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms > 1 ? `${bedrooms} Bedrooms` : ` ${bedrooms} Bedroom` }
              </li>
              <li className="offer__feature offer__feature--adults">
                {maxAdults > 1 ? `Max ${maxAdults} adults` : ` Max ${maxAdults} adult` }
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <OfferInside extendedOffer = {extendedOffer}/>
            <Host extendedOffer = {extendedOffer}/>
            <UserReviews reviews = {reviews} id = {id}/>
          </div>
        </div>
        <Map currentCity={extendedOffer.city} points = {nearbyOffer.slice(0, 3)} activeCardId = {extendedOffer.id} className="offer"/>
      </section>
      <ContainerOffers offers = {nearbyOffer.slice(0, 3)}/>
    </main>
  );
}

export default OfferPage;
