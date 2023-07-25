import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
const { Component } = require('react');

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  addContact = e => {
    e.preventDefault();
    if (this.props.list.find(contact => contact.name === this.state.name)) {
      alert(`${this.state.name} is already in contacts.`);
      return;
    }

    this.props.list.push({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });
    this.props.onUpdate();
  };
  render() {
    return (
      <form className="formEl">
        <label className="formEl__label">Name</label>
        <input
          className="formEl__input"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className="formEl__label">Number</label>
        <input
          className="formEl__input"
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button
          className="formEl__button"
          onClick={e => {
            this.addContact(e);
          }}
        >
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onUpdate: PropTypes.func.isRequired,
};

export default ContactForm;
