import {Outlet, useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';


const getLayoutState = (pathname:AppRoute) => {
  let rootClassName = '';
  let showUser = true;
  let showFooter = false;

  if (pathname === AppRoute.Main){
    rootClassName = 'page--gray page--main';

  } else if(pathname === AppRoute.Login) {
    rootClassName = 'page--gray page--login';
    showUser = false;
  } else if(pathname === AppRoute.Favorites) {
    showFooter = true;
  }

  return {rootClassName, showUser, showFooter};
};


function Layout(){
  const {pathname} = useLocation();
  const {rootClassName, showUser, showFooter} = getLayoutState (pathname as AppRoute);
  // const authorizationStatus = getAuthorizationStatus();
  return(
    <div className={`page ${rootClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            {
              showUser ? (
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        <span className="header__favorite-count">3</span>
                      </a>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
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
            <a className="footer__logo-link" href="main.html">
              <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
            </a>
          </footer>
        ) : null
      }
    </div>
  );
}

export default Layout;
