
import { changeCity } from '../action';
import { cityReduser } from './city-reduser';


describe('cityReduser', () => {
  it('execute changeCity action', () => {
    const previousState = { currentCity: 'Paris' };
    const newCity = 'Beograd';

    const result = cityReduser.reducer(previousState, changeCity(newCity));

    expect(result.currentCity).toEqual(newCity);
  });
});


