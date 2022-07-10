import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'components/redux/selectors';
import * as actions from '../redux/actions';
import s from './Filter.module.css';

const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = event =>
    dispatch(actions.changeFilter(event.target.value));

  return (
    <div>
      <h2 className={s.title}>Contacts</h2>
      <label className={s.label}>
        <span className={s.text}>Find contact by name</span>
        <input
          className={s.input}
          type="text"
          name="filter"
          value={filterValue}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};

export default Filter;
