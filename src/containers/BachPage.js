import React, { Component } from 'react';
// import axios from 'axios';
import CourseList from '../components/BachList';

export class SchoolPages extends Component {
  state = {
    schools: []
  };

  componentDidMount() {
    fetch('https://api.mlab.com/api/1/databases/hufflecodedb/collections/schools?apiKey=PN8pEBddMYPVd9NlXaD8ns29CfTJck-1')
      .then(res => res.json())
      .then(schools => {
        this.setState({ schools: schools });
        console.log('Fetch successful\n', schools);
      })
      .catch(err => console.log(err));
  }

  render() {
    const { schools } = this.state;
    return (schools
      ? <CourseList schools={schools} />
      : <h1>Loading...</h1>
    );
  }
}

export default SchoolPages;
