import React, { Component } from 'react';
import Axios from 'axios';

import CoursesHead from '../components/CoursesHeader';
import CoursesBody from '../components/CoursesBody';

class CoursesTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: "",
      major: 0,
      subject: 0,
      tutories: []
    }
  }

  handleSubscribe = (student, subject) => {
    Axios.post('https://api.mlab.com/api/1/databases/hufflecodedb/collections/student-tutor?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5', {
      student: this.state.student,
      tutor: student.student_id,
      materia: subject,
      carrera: this.state.major
    })
      .then(res => {
        if (res.status === 200) {
          alert("Success!")
        } else {
          alert("An error ocurred, try again.")
        }
      })

    Axios.put('https://api.mlab.com/api/1/databases/hufflecodedb/collections/subject-tutor?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5', {
      major_id: student.major_id,
      subject_id: student.subject_id,
      student_id: student.student_id,
      name: student.name,
      days: student.days,
      schedule: student.schedule,
      amount: student.amount,
      current: student.current + 1
    })
  }

  componentDidMount() {
    this.setState({ student: this.props.student, major: this.props.major, subject: this.props.subject });
    Axios.get('https://api.mlab.com/api/1/databases/hufflecodedb/collections/subject-tutor?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5')
      .then(res => {
        this.setState({ tutories: res.data.filter(tutor => tutor.major_id === this.state.major && tutor.subject_id === this.state.subject && tutor.amount !== tutor.current) })
      })
  }

  render() {
    const { student, major, subject, tutories } = this.state;
    return (
      <div>
        <h2 className="tc">Elige a tu tutor para la materia</h2>
        <hr/>
        <table>
          <CoursesHead />
          <CoursesBody handleSubscribe={this.handleSubscribe} tutories={tutories} />
        </table>
      </div>
    );
  }
}

export default CoursesTable;
