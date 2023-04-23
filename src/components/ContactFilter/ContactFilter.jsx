import React, { Component } from 'react';

export class ContactFilter extends Component {
  render() {
    const { value, onFilter } = this.props;
    return (
      <div>
        <label htmlFor="search">Find contacts by name</label>
        <input
          type="text"
          value={value}
          onChange={onFilter}
          placeholder="Enter name to search"
        />
      </div>
    );
  }
}
