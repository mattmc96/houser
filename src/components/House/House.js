/** @format */

import React, { Component } from 'react';
import './House.css';

export default class House extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, name, address, city, state, zip } = this.props.houses;
    return (
      <div className='houses' key={this.props.i}>
        <li>{name}</li>
        <li>{address}</li>
        <li>{city}</li>
        <li>{state}</li>
        <li>{zip}</li>
        <button>Delete</button>
      </div>
    );
  }
}
