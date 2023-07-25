import { useEffect } from 'react';
import { useState } from 'react';

const ContactList = ({ contacts }) => {
  const [personData, setpersonData] = useState([]);
  const data = JSON.parse(localStorage.getItem('person'));

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('person'));
    setpersonData(data);
    console.log(data);
  }, []);

  useEffect(() => {
    if (data.length > personData.length) {
      const abc = JSON.parse(localStorage.getItem('person'));
      setpersonData(abc);
    }
  }, [data]);

  const handleDelete = id => {
    const updateContact = personData.filter(person => person.id !== id);
    localStorage.setItem('person', JSON.stringify(updateContact));
    setpersonData(updateContact);
  };

  return (
    <ul>
      {personData
        ? personData.map(person => (
            <li>
              Name: {person.name} Number: {person.number}
              <button onClick={() => handleDelete(person.id)}>Delete</button>
            </li>
          ))
        : null}
    </ul>
  );
};

export default ContactList;
