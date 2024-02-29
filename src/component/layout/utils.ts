import {AppRoute} from '../../const';

const getLayoutState = (pathname:AppRoute) => {
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
    showFooter = true;
  }

  return {rootClassName, showUser, showFooter, linkClassName};
};

export {getLayoutState};

