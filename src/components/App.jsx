import { useEffect } from 'react';
import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isRender, setisRender] = useState(false);
  const [filteredContacts, setFilteredContacts] = useState([]);

  console.log('contacts', contacts);
  console.log('filteredContacts', filteredContacts);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('person'));

    if (data === null) {
      setContacts([]);
    }
    setContacts(data);
    setFilteredContacts(data);
  }, []);

  const handleAddContact = newContact => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);

    localStorage.setItem('person', JSON.stringify(updatedContacts));

    setisRender(!isRender);
  };

  const handleRemoveContact = idToRemove => {
    const updatedContacts = contacts.filter(contact => contact.id !== idToRemove);
  
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
  
    localStorage.setItem('person', JSON.stringify(updatedContacts));
  
    setisRender(!isRender);
  };
  

  const handleFilter = e => {
    const { value } = e.target;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredContacts(filteredContacts);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm newContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter onChange={handleFilter} />

      <ContactList filteredContacts={filteredContacts} handleRemoveContact={handleRemoveContact} />
    </div>
  );
};

export default App;
