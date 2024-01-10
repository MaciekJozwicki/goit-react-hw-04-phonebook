import { useEffect } from 'react';
import { useState } from 'react';

const ContactList = ({ contacts }) => {
  const [personData, setpersonData] = useState([]);
  // const data = JSON.parse(localStorage.getItem('person'));
  console.log('persondata', personData);

  console.log('contacts', contacts);
  console.log(contacts.length);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('person'));
    setpersonData(data);
    console.log(data);
  }, [contacts.length]);

  // useEffect(() => {
  //   if (data.length > personData.length) {
  //     const abc = JSON.parse(localStorage.getItem('person'));
  //     setpersonData(abc);
  //   }
  // }, [data]);

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
