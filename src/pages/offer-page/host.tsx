import { ExtendedOffer } from '../../types/extended offer';

type Props = {
  extendedOffer: ExtendedOffer;
}

function Host({extendedOffer}: Props): JSX.Element {

  const {isPremium, host, description } = extendedOffer;
  return(
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={`offer__avatar-wrapper ${isPremium ? 'offer__avatar-wrapper--pro' : ''}  user__avatar-wrapper`}>
          <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="offer__user-name">
          {host.name}
        </span>
        {
          isPremium ? (
            <span className="offer__user-status">
                Pro
            </span>
          ) : null
        }
      </div>
      <div className="offer__description">
        <p className="offer__text">
          { description }
        </p>
      </div>
    </div>
  );
}

export default Host;
