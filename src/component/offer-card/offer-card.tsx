import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import { store } from '../../store';
import { saveFavoritesOffersAction } from '../../store/api-actions';
import { memo, useState } from 'react';
import { useAppSelector } from '../../hock';

type Props = {
  offer: Offer;
  setActiveCardId?: (str: string) => void ;
  className: string;
}

function OfferCard({offer, setActiveCardId, className}:Props): JSX.Element {
  const [currentOffers, setcurrentOffers] = useState<Offer>(offer);

  const handleFavoriteClick = () => {
    store.dispatch(saveFavoritesOffersAction({
      id: offer.id,
      isFavorite: offer.isFavorite ? 0 : 1
    }));
    setcurrentOffers({...currentOffers, isFavorite: !currentOffers.isFavorite});

  };
  const favorites = useAppSelector((state) => state.favoritesOffers);
  console.log('count offers fav',favorites)

  const {rating, id, isPremium, previewImage, title, type, isFavorite, price} = currentOffers;
  const roundedRating = Math.round(rating);
  const handleMouseEnter = () => {
    if(setActiveCardId){
      setActiveCardId(id);
    }
  };

  const offerPath = `/offer/${id}`;

  const handleMouseLeave = () => {
    if(setActiveCardId){
      setActiveCardId('');
    }
  };

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${className}__card place-card`}
    >
      {
        isPremium ? (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        ) : null
      }
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={offerPath}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : '' }`}
            type="button"
            onClick={handleFavoriteClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${roundedRating * 20}% `}}></span>
            <span className="visually-hidden">{roundedRating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerPath}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default memo( OfferCard );
