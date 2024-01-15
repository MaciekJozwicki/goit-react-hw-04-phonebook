import { useEffect } from 'react';
import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isRender, setisRender] = useState(false);
  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('person'));

    if (data === null || data.length === 0) {
      localStorage.removeItem('person');
      setContacts([]);
      return;
    }
    setContacts(data);
  }, [filter]);

  useEffect(() => {
    localStorage.setItem('person', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);

    setisRender(!isRender);
  };

  const handleRemoveContact = idToRemove => {
    const updatedContacts = contacts.filter(
      contact => contact.id !== idToRemove
    );
    setContacts(updatedContacts);

    setisRender(!isRender);
  };

  const handleFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm newContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter onChange={handleFilter} />

      <ContactList
        filteredContacts={filteredContacts}
        handleRemoveContact={handleRemoveContact}
      />
    </div>
  );
};

export default App;
