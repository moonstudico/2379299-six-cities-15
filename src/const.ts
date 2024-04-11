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

export const STARS = [
  {label: 'perfect', value: 5},
  {label: 'good', value:4},
  {label: 'not bad', value:3},
  {label: 'badly', value:2},
  {label: 'terribly', value:1},
];

export const MAX_LENGHT = 300;
export const MIN_LENGHT = 50;
export const TIMEOUT_SHOW_ERROR = 2000;
export const MAX_COUNT_REVIEWS = 10;


export const URL_MARKER_DEFAULT = '/img/pin.svg';
export const URL_MARKER_CURRENT = '/img/pin-active.svg';
export const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export enum APIRoute{
  Offers = '/offers',
  Favorites = '/favorite',
  Review = '/comments',
  Login = '/login',
  Logout = '/logout'
}
