
import { changeCity } from '../action';
import { cityReduser } from './city-reduser';


describe('getCity', () => {
  it('should update current city on CHANGE_CITY action', () => {
    const previousState = { currentCity: 'Paris' };
    const newCity = 'Beograd';

    const result = cityReduser.reducer(previousState, changeCity(newCity));

    expect(result.currentCity).toEqual(newCity);
  });
});


