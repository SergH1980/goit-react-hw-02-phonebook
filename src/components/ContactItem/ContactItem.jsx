import React, { Component } from 'react';

export class ContactItem extends Component {
  toHandleDelete = event => {
    this.props.onDelete(event.currentTarget);
    console.log(event.currentTarget.id);
  };
  render() {
    return this.props.contacts.map(contact => (
      <li key={contact.id}>
        <p>
          {contact.name}: {contact.number}
        </p>
        <button id={contact.id} type="button" onClick={this.toHandleDelete}>
          Delete
        </button>
      </li>
    ));
  }
}
