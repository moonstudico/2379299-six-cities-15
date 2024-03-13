
type Props = {
  setSort: (str: string) => void ;
}

function Sort ({setSort}: Props): JSX.Element{

  return(
    <ul className="places__options places__options--custom places__options--opened">
      <li className="places__option places__option--active" tabIndex={0}>Popular
      </li>
      <li
        className="places__option"
        tabIndex={0}
        onClick={() => setSort('low to high')}
      >Price: low to high
      </li>
      <li
        className="places__option"
        tabIndex={0}
        onClick={() => setSort('high to low')}
      >Price: high to low
      </li>
      <li
        className="places__option"
        tabIndex={0}
        onClick={() => setSort('Top rated first')}
      >Top rated first
      </li>
    </ul>
  );
}

export default Sort;
