import { nanoid } from 'nanoid';
import { useState } from 'react';

const ContactForm = ({ newContact }) => {
  const [userData, setuserData] = useState({
    name: '',
    number: '',
  });

  const handleInput = e => {
    setuserData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = e => {
    e.preventDefault();
    newContact({
      id: nanoid(),
      name: userData.name,
      number: userData.number,
    });

    setuserData({
      name: '',
      number: '',
    });
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <label className="formEl__label">Name</label>
        <input
          onChange={handleInput}
          value={userData.name}
          className="formEl__input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className="formEl__label">Number</label>
        <input
          onChange={handleInput}
          value={userData.number}
          className="formEl__input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className="formEl__button">
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
