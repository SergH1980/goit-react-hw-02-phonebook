import React, { Component } from 'react';

import { Form } from './Form/Form';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <div>
        <div>
          <h2>Phonebook</h2>
          <Form onSubmit={this.formSubmitHandler} />
        </div>
        <div>
          <h2>Contacts</h2>
          <ul>
            <li>
              <p>Contact name</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
