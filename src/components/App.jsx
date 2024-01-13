import { useEffect } from 'react';
import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isRender, setisRender] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('person'));

    if (data === null) {
      setContacts([]);
    }
    setContacts(data);
  }, []);

  const handleAddContact = newContact => {
    let array = contacts;
    array = array === null ? [] : array;

    array.push(newContact);
    setContacts(array);

    localStorage.setItem('person', JSON.stringify(array));

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
