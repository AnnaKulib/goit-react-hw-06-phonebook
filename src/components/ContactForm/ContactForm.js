import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
import { getContact } from '../redux/selectors';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return new Error(`Something wrong, please try again`);
    }
  };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   onSubmit({ name, number });
  //   setName('');
  //   setNumber('');
  // };
  const handleSubmit = event => {
    event.preventDefault();
    const similarContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (similarContact) {
      alert(`${name} is already in contact`);
    } else
      dispatch(
        actions.addContact({
          id: nanoid(),
          name,
          number,
        })
      );

    setName('');
    setNumber('');
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <div className={s.textField}>
        <div className={s.textField__floating}>
          <input
            className={s.textField__input}
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
            // placeholder="Your Name"
          />
          <label htmlFor="name" className={s.textField__label}>
            Name
          </label>
        </div>
        <div className={s.textField__floating}>
          <input
            className={s.textField__input}
            type="tel"
            id="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
            // placeholder="+XX XXX XX XX"
          />
          <label htmlFor="tel" className={s.textField__label}>
            Phone number
          </label>
        </div>
        <button type="submit" className={s.textField__btn}>
          Add contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
