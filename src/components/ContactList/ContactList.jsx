

const ContactList = ({ filteredContacts, handleRemoveContact }) => {
 

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
