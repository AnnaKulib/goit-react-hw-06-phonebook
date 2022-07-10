import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
import s from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const onDelete = id => dispatch(actions.deleteContact(id));
  return (
    <li className={s.item}>
      <p>{name}</p>
      <div className={s.thumb}>
        <p>{number}</p>
        <button
          className={s.button}
          type="button"
          id={id}
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactItem;
