import { useEffect } from 'react';
import { useState } from 'react';

const ContactList = ({ filteredContacts, handleRemoveContact }) => {
  // const [personData, setpersonData] = useState([]); // powielone

  // useEffect(() => {
  //   let array = contacts;
  //   array = array === null ? [] : array;
  //   localStorage.setItem('person', JSON.stringify(array)); // powielone

  //   setpersonData(array);
  // }, [contacts]);

  // const handleDelete = id => {
  //   const updateContact = personData.filter(person => person.id !== id);
  //   localStorage.setItem('person', JSON.stringify(updateContact));
  //   setpersonData(updateContact);
  //   if (updateContact.length === 0) {
  //     localStorage.removeItem('person');
  //   }
  // };

  console.log(22, filteredContacts);

  return (
    <ul>
      {filteredContacts?.map((person, index) => (
        <li key={index}>
          Name: {person.name} Number: {person.number}
          <button onClick={() => handleRemoveContact(person.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
