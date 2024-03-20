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

export enum APIRoute{
  Offers = '/offers',
  Offer = '/offers/{offerId}',
  nearbyOffers = '/offers/{offerId}/nearby',
  Login = '/login',
  Logout = '/logout'
}
