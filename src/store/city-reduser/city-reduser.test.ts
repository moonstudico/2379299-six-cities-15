import { cities } from '../../mocks/cities';
import { changeCity } from '../action';
import { cityReduser } from './city-reduser';

let currentIndexCity = 0;
const getCity = () => {
  const currentCity = cities[currentIndexCity];
  currentIndexCity++;
  return currentCity;
};


describe('getCity', () => {
  it('should update current city on CHANGE_CITY action', () => {
    const previousState = { currentCity: 'Paris' };
    const newCity = getCity();

    const result = cityReduser.reducer(previousState, changeCity(newCity));

    expect(result.currentCity).toEqual(newCity);
  });
});


