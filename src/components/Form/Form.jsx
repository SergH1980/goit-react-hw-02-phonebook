import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
  };

  handleNameChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '' });
  };

  handleNameSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };
  render() {
    return (
      <form onSubmit={this.handleNameSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          onChange={this.handleNameChange}
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input type="submit" value="Add contact"></input>
      </form>
    );
  }
}
