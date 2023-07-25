import { useEffect } from 'react';
import { useState } from 'react';

const { Component } = require('react');
const { default: ContactForm } = require('./ContactForm/ContactForm');
const { default: ContactList } = require('./ContactList/ContactList');
const { default: Filter } = require('./Filter/Filter');

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isRender, setisRender] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('person'));
    console.log(data);
    if (data === null) {
      setContacts([]);
    }
    setContacts(data);
    console.log(contacts);
  }, []);

  const handleAddContact = newContact => {
    let array = contacts;
    array = array === null ? [] : array;
    console.log('test');
    console.log(array);
    array.push(newContact);
    setContacts(array);
    localStorage.removeItem('person');
    localStorage.setItem('person', JSON.stringify(array));
    console.log(newContact, array);
    setisRender(!isRender);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm newContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
