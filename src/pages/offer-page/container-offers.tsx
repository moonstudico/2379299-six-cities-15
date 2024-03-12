import OfferCard from '../../component/offer-card';
import { Offer } from '../../types/offer';

type Props = {

  offers: Offer[];
}

function ContainerOffers({offers}: Props): JSX.Element{
  return(
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {
            offers.map((offer) => <OfferCard offer={offer} key={offer.id} className="near-places"/>)
          }
        </div>
      </section>
    </div>
  );
}

export default ContainerOffers;
