import {AppRoute} from '../../const';
import { store } from '../../store';

const getLayoutState = (pathname:AppRoute) => {
  const state = store.getState();
  const favorites = state.offers.favoritesOffers;

  let rootClassName = '';
  let linkClassName = '';
  let showUser = true;
  let showFooter = false;

  if (pathname === AppRoute.Main){
    rootClassName = 'page--gray page--main';
    linkClassName = 'header__logo-link--active';

  } else if(pathname === AppRoute.Login) {
    rootClassName = 'page--gray page--login';
    showUser = false;
  } else if(pathname === AppRoute.Favorites) {
    rootClassName = favorites.length > 0 ? '' : 'page--favorites-empty';
    showFooter = true;
  }

  return {rootClassName, showUser, showFooter, linkClassName};
};

export {getLayoutState};

