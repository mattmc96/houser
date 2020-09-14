/** @format */

import React, { Component } from 'react';
import House from '../House/House';
import Wizard from '../Wizard/Wizard';
import { Link } from 'react-router-dom';
import './Dashboard.css';

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: [],
    };
  }

  render() {
    const { houses } = this.state;
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to='/wizard' className='dash-link'>
          <button className='dashboard-btn'>Add New Property </button>
        </Link>
        {houses.map(item => {
          return <House houses={item} />;
        })}
      </div>
    );
  }
}
