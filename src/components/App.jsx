const { Component } = require('react');
const { default: ContactForm } = require('./ContactForm/ContactForm');
const { default: ContactList } = require('./ContactList/ContactList');
const { default: Filter } = require('./Filter/Filter');

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  load = () => {
    console.log(JSON.stringify(this.state.contacts));
    let data = localStorage.getItem('contacts');
    if (data === null) {
      this.setState({ contacts: [] });
    } else {
      this.setState({ contacts: JSON.parse(data) });
    }
  };

  updateStorage = () => {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };
  update = () => {
    this.setState({ contacts: this.state.contacts });
    this.updateStorage();
  };
  updateFilter = pattern => {
    this.setState({ filter: pattern });
    console.log(this.state.filter);
  };
  delete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
    this.updateStorage();
    console.log();
  };
  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onUpdate={this.update} list={this.state.contacts} />

        <h2>Contacts</h2>
        <Filter onUpdate={this.updateFilter} pattern={this.state.filter} />
        <ContactList
          onDelete={this.delete}
          list={this.state.contacts}
          pattern={this.state.filter}
        />
      </div>
    );
  }
}
export default App;
