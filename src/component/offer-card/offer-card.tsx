import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';

type Props = {
  offer: Offer;
  setActiveCardId?: (str: string) => void ;
  className: string;
}

function OfferCard({offer, setActiveCardId, className }:Props): JSX.Element {

  const handleMouseEnter = () => {
    if(setActiveCardId){
      setActiveCardId(offer.id);
    }

    // 'place-card__bookmark-button--active' класс для фаворит
  };

  const offerPath = `/offer/${offer.id}`;

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
        offer.isPremium ? (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        ) : null
      }
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={offerPath}>
          <img

            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerPath}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
