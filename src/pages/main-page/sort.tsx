import { memo } from 'react';
import { SortType } from '../../const';

type Props = {
  setSort: (str: SortType) => void ;
  activeOfferSort: SortType;
  isFilter: boolean;
  setFilter: (str: boolean) => void;
}

function SortRew ({setSort, activeOfferSort, isFilter, setFilter}: Props): JSX.Element{

  return(
    <ul className={`places__options places__options--custom ${isFilter ? 'places__options--opened' : 'places__options--closed'}`}>
      {Object.values(SortType).map((sortType) => (
        <li
          key={sortType}
          className={`places__option ${sortType === activeOfferSort ? 'places__option--active' : ''}`}
          tabIndex={0}
          onClick={() => {
            setSort(sortType);
            setFilter(!isFilter);
          }}
        >{sortType}
        </li>
      ))}
    </ul>
  );
}
const Sort = memo(SortRew);
export default Sort;
