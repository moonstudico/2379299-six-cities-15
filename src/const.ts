export enum AppRoute{
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus{
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum SortType{
  Default = 'Popular',
  PriceLow = 'Price: low to high',
  PriceHigh = 'Price: high to low',
  TopRated = 'Top rated first'
}

export const TIMEOUT_SHOW_ERROR = 2000;
export const MAX_COUNT_REVIEWS = 10;

export enum APIRoute{
  Offers = '/offers',
  Favorites = '/favorite',
  Review = '/comments',
  Login = '/login',
  Logout = '/logout'
}
