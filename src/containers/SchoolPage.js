import React, { Component } from 'react';
import BachList from '../components/SchoolList';

export class SchoolPage extends Component {
  state = {
    bach: [
      {
        id: 1,
        name: 'Environmental Engineering'
      },      {
        id: 2,
        name: 'Biomedical Engineering'
      },      {
        id: 3,
        name: 'Civil Engineering'
      },      {
        id: 4,
        name: 'Energy Engineering'
      },      {
        id: 5,
        name: 'Engineering In Food Industries'
      },      {
        id: 6,
        name: 'Logistics Engineering'
      },      {
        id: 7,
        name: 'Robotics And Telecommunications Engineering'
      },      {
        id: 8,
        name: 'Computer Systems Engineering'
      },      {
        id: 9,
        name: 'Industrial Engineering'
      },      {
        id: 10,
        name: 'Mechanical Engineering'
      },      {
        id: 11,
        name: 'Mechatronics Engineering'
      },      {
        id: 12,
        name: 'Chemical Engineering'
      },
    ]
  }
  
  render() {
    const { bach } = this.state;
    return bach
      ? <BachList bach={bach}/>
      : <h1>Loading...</h1>;
  }
}

export default SchoolPage;
