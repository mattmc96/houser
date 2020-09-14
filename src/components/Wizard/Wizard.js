/** @format */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Wizard.css';

export default class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value,
    });
  }

  render() {
    return (
      <form>
        <div>
          <header>
            <h1>Add New Listing</h1>
          </header>
          <Link to='/' className='wizard-link'>
            <button className='cancel-btn'>Cancel</button>
          </Link>
        </div>
        <div className='div-1'>
          <p>Property Name</p>
          <input name='name' inputChange={e => this.handleInputChange(e)} />
        </div>
        <div className='div-2'>
          <p>Address</p>
          <input name='address' inputChange={e => this.handleInputChange(e)} />
        </div>
        <div className='div-3'>
          <div>
            <p>City</p>
            <input name='city' inputChange={e => this.handleInputChange(e)} />
          </div>
          <div>
            <p>State</p>
            <input name='state' inputChange={e => this.handleInputChange(e)} />
          </div>
          <div>
            <p>Zip</p>
            <input name='zip' inputChange={e => this.handleInputChange(e)} />
          </div>
        </div>
      </form>
    );
  }
}
