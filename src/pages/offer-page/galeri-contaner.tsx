import { ExtendedOffer } from '../../types/extended offer';

type Props = {
  extendedOffer: ExtendedOffer;
}

function GaleriContaner({extendedOffer}: Props): JSX.Element {
  return(
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {
          extendedOffer.images.map((image) =>
            (
              <div key={image} className="offer__image-wrapper">
                <img className="offer__image" src={image} alt="Photo studio" />
              </div>
            )
          )
        }
      </div>
    </div>
  );
}

export default GaleriContaner;
