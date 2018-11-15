import React, { Component } from 'react';
import Axios from 'axios';

import CoursesHead from '../components/CoursesHeader';
import CoursesBody from '../components/CoursesBody';

class CoursesTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      major: '5be77595fb6fc06239e0bcc4',
      subject: 2,
      tutories: []
    }
  }

  componentDidMount() {
    Axios.get('https://api.mlab.com/api/1/databases/hufflecodedb/collections/subject-tutor?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5')
      .then(res => {
        this.setState({ tutories: res.data.filter(tutor => tutor.major_id === this.state.major && tutor.subject_id === this.state.subject) })
      })
  }

  render() {
    const { major, subject, tutories } = this.state;
    return (
      <table>
        <CoursesHead />
        <CoursesBody tutories={tutories}/>
      </table>
    );
  }
}

export default CoursesTable;
