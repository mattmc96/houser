/** @format */

import React, { Component } from 'react';
import House from '../House/House';
import Wizard from '../Wizard/Wizard';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Axios from 'axios';

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: [],
    };
  }
  componentDidMount() {
    Axios.get('/api/houses').then(res => {
      this.setState({
        houses: res.data,
      });
    });
  }

  render() {
    const { houses } = this.state;
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to='/wizard' className='dash-link'>
          <button className='dashboard-btn'>Add New Property </button>
        </Link>
        {houses.map((item, i) => {
          return <House key={i} houses={item} />;
        })}
      </div>
    );
  }
}
