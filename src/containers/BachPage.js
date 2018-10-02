import React, { Component } from 'react';
import CourseList from '../components/BachList';

export class SchoolPages extends Component {
  state = {
    schools: [
      {
        id: 1,
        name: 'Art'
      },
      {
        id: 2,
        name: 'Social Science'
      },
      {
        id: 3,
        name: 'Science'
      },
      {
        id: 4,
        name: 'Engineering'
      },
      {
        id: 5,
        name: 'Business'
      }
    ]
  };

  render() {
    const { schools } = this.state;
    return (schools
      ? <CourseList schools={schools} />
      : <h1>Loading...</h1>
    );
  }
}

export default SchoolPages;
