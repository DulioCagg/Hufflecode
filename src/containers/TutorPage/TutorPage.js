import React, { Component } from 'react';
import Axios from 'axios';
import TutorST from '../../components/TutorST';
import './TutorPage.css'


class TutorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentId: "",
      name: "",
      email: "",
      info: "",
      type: "",
      tutories: [],
      nStudents: 0,
      nCourses: 0,
      grade: 0
    }
  }

  componentDidMount() {
    console.log(this.props.student)
    this.setState({ studentId: this.props.student })
    this.setState({ type: this.props.type })
    Axios.get("https://api.mlab.com/api/1/databases/hufflecodedb/collections/students?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5")
      .then(res => {
        let student = res.data.filter(x => x._id.$oid === this.state.studentId)
        this.setState({ name: student[0].user.name })
        this.setState({ email: student[0].user.email })
        this.setState({ info: student[0].user.info })
        this.setState({ nStudents: student[0].user.numberCourses })
        this.setState({ nCourses: student[0].user.numberStudents })
        this.setState({ grade: student[0].user.grade })
      })
    Axios.get("https://api.mlab.com/api/1/databases/hufflecodedb/collections/subject-tutor?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5")
      .then(res => {
        let tut = this.state.tutories
        let info = res.data.filter(x => x.student_id === this.state.studentId)
        this.setState({ tutories: tut.concat(info) })
      })
  }

  render() {
    const { id, name, email, info, type, tutories, nStudents, nCourses, grade } = this.state;
    return (
      <div className="ProfileSTutor">
        <div className="profileSInfo tc">
          <h2>{name}</h2>
          <h2>{email}</h2>
          <hr />
          <h2>{info}</h2>
        </div>
        <div className="tutorSStats">
          <table>
            <thead>
              <tr>
                <th className="tc"><h3># Courses</h3></th>
                <th className="tc"><h3># Students</h3></th>
                <th className="tc"><h3>Grade</h3></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tc"><h4>{nStudents}</h4></td>
                <td className="tc"><h4>{nCourses}</h4></td>
                <td className="tc"><h4>{grade}</h4></td>
              </tr>
            </tbody>
          </table>
          <h1>Mis Tutorias</h1>
          <div className="tutorSCourses">
            <TutorST tutories={tutories} />
          </div>
        </div>
      </div>
    )
  }
}


export default TutorPage;
