

const ContactList = ({ filteredContacts, handleRemoveContact }) => {
 

  

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
