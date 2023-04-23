import React, { Component } from 'react';

import { ContactItem } from 'components/ContactItem/ContactItem';

export class ContactList extends Component {
  render() {
    return (
      <ul>
        <ContactItem
          contacts={this.props.contacts}
          onDelete={this.props.onDelete}
        />
      </ul>
    );
  }
}
