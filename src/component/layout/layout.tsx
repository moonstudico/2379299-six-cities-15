import {Link, Outlet, useLocation} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getLayoutState} from '../layout/utils';
import { useAppSelector } from '../../hock';
import { store } from '../../store';
import { logoutAction } from '../../store/api-actions';


function Layout(){
  const {pathname} = useLocation();
  const {rootClassName, linkClassName, showUser, showFooter} = getLayoutState (pathname as AppRoute);
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  const countFavorite = useAppSelector((state) => state.offers.favoritesOffers);
  const userData = useAppSelector((state) => state.user.userData);

  const handleClick = () => {

    store.dispatch(logoutAction());
  };

  const divStyle = {
    backgroundImage: `url(${userData?.avatarUrl})`,
    borderRadius: '50%',
  };

  return(
    <div className={`page ${rootClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className={`header__logo-link ${linkClassName }`} to = {AppRoute.Main} >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            {
              showUser ? (
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper" style={authorizationStatus === AuthorizationStatus.Auth ? divStyle : {}}>
                        </div>
                        {
                          authorizationStatus === AuthorizationStatus.NoAuth || authorizationStatus === AuthorizationStatus.Unknown ?
                            (<span className="header__login">Sign in</span>)
                            : (
                              <>
                                <span className="header__user-name user__name">{userData?.email}</span>
                                <span className="header__favorite-count">{countFavorite.length}</span>
                              </>
                            )
                        }
                      </Link>
                    </li>
                    {
                      authorizationStatus === AuthorizationStatus.Auth ?
                        (
                          <li className="header__nav-item">
                            <Link
                              className="header__nav-link"
                              to={AppRoute.Main}
                              onClick={handleClick}
                            >
                              <span className="header__signout">Sign out</span>
                            </Link>
                          </li>
                        ) : null
                    }
                  </ul>
                </nav>
              ) : null
            }
          </div>
        </div>
      </header>
      <Outlet />
      {
        showFooter ? (
          <footer className="footer container">
            <Link className="footer__logo-link" to={AppRoute.Main}>
              <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
            </Link>
          </footer>
        ) : null
      }
    </div>
  );
}

export default Layout;
