import { useSelector } from 'react-redux';
import { getVisibleContacts } from '../redux/selectors';

import ContactItem from 'components/ContactItem';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
        return <ContactItem contact={{ id, name, number }} key={id} />;
      })}
    </ul>
  );
};

export default ContactList;
