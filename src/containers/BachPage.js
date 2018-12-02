import React, { Component } from 'react';

import CourseList from '../components/BachList';

export class SchoolPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      input: ''
    }
  }

  componentDidMount() {
    fetch('https://api.mlab.com/api/1/databases/hufflecodedb/collections/schools?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5')
      .then(res => res.json())
      .then(schools => {
        this.setState({ schools: schools });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevInput) {
    if (this.props.input !== prevInput.input) {
      this.setState({ input: this.props.input })
    }
  }

  render() {
    const { schools, input } = this.state;
    const filtered = schools.filter(school => school.escuela.toLowerCase().includes(input.toLowerCase()));
    return (filtered
      ? <CourseList schools={filtered} onSchool={this.props.school} />
      : <h1>Loading...</h1>
    );
  }
}

export default SchoolPages;
