import { useEffect } from 'react';
import { useState } from 'react';

const ContactList = ({ contacts }) => {
  const [personData, setpersonData] = useState([]);
  // const data = JSON.parse(localStorage.getItem('person'));

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('person'));
  //   setpersonData(data);
  // }, [contacts.length]);

  useEffect(() => {
    if (contacts.length > personData.length) {
      const data = JSON.parse(localStorage.getItem('person'));
      setpersonData(data);
    }
  }, [contacts.length, personData.length]);

  const handleDelete = id => {
    const updateContact = personData.filter(person => person.id !== id);
    localStorage.setItem('person', JSON.stringify(updateContact));
    setpersonData(updateContact);
  };

  return (
    <ul>
      {personData
        ? personData.map((person, index) => (
            <li key={index}>
              Name: {person.name} Number: {person.number}
              <button onClick={() => handleDelete(person.id)}>Delete</button>
            </li>
          ))
        : null}
    </ul>
  );
};

export default ContactList;
