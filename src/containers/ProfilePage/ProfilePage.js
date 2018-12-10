import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import StudentCourses from '../../components/StudentCourses';
import TutorCourses from '../../components/TutorCourses';
import './ProfilePage.css'


class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentId: "",
      name: "",
      email: "",
      info: "",
      type: "",
      studentTutories: [],
      tutorTutories: []
    }
  }

  componentDidMount() {
    this.setState({ studentId: this.props.student })
    this.setState({ type: this.props.type })
    Axios.get("https://api.mlab.com/api/1/databases/hufflecodedb/collections/students?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5")
      .then(res => {
        let student = res.data.filter(x => x._id.$oid === this.state.studentId)
        this.setState({ name: student[0].user.name })
        this.setState({ email: student[0].user.email })
        this.setState({ info: student[0].user.info })
      })
    Axios.get("https://api.mlab.com/api/1/databases/hufflecodedb/collections/student-tutor?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5")
      .then(res => {
        let tut = this.state.studentTutories
        let info = res.data.filter(x => x.student === this.state.studentId)
        this.setState({ studentTutories: tut.concat(info) })
      })
    Axios.get("https://api.mlab.com/api/1/databases/hufflecodedb/collections/subject-tutor?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5")
      .then(res => {
        let tut = this.state.tutorTutories
        let info = res.data.filter(x => x.student_id === this.state.studentId)
        this.setState({ tutorTutories: tut.concat(info) })
      })
  }

  deleteTutorie = (id) => {
    Axios.delete(`https://api.mlab.com/api/1/databases/hufflecodedb/collections/student-tutor/${id}?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5`, {})
      .then(res => console.log(res.data))
  }


  deleteTutorieT = (idT) => {
    Axios.delete(`https://api.mlab.com/api/1/databases/hufflecodedb/collections/subject-tutor/${idT}?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5`, {})
      .then(res => console.log(res.data))
    Axios.get(`https://api.mlab.com/api/1/databases/hufflecodedb/collections/student-tutor?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5`)
      .then(res => {
        let info = res.data.filter(x => x.tutorie === idT)
        info.map(x => {
          Axios.delete(`https://api.mlab.com/api/1/databases/hufflecodedb/collections/student-tutor/${x._id.$oid}?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5`, {})
            .then(res => console.log(res.data))
        })
      })
  }

  calificar = (id) => {
    let cal = prompt("Calificacion del tutor (Entre 1 y 10)")
    Axios.get("https://api.mlab.com/api/1/databases/hufflecodedb/collections/students?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5")
      .then(res => {
        let info = res.data.filter(x => x._id.$oid === id)
        Axios.put("https://api.mlab.com/api/1/databases/hufflecodedb/collections/students?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5", {
          "user": {
            "name": info[0].user.name,
            "email": info[0].user.email,
            "password": info[0].user.password,
            "student_id": info[0].user.studentId,
            "type": info[0].user.type,
            "info": info[0].user.info,
            "numberCourses": info[0].user.numberCourses,
            "numberStudents": info[0].user.numberStudents,
            "grade": ((info[0].user.grade + cal) / 2)
          }
        })
      })
  }


  render() {
    const { id, name, email, info, type, studentTutories, tutorTutories } = this.state;

    console.log("tutor", tutorTutories);
    console.log("student", studentTutories);

    if (this.state.type === 'student') {
      if (studentTutories.length > 0) {
        return (
          <div className="profileStudent">
            <div className="profileInfoS tc">
              <h2>{name}</h2>
              <h2>{email}</h2>
              <hr />
              <h2>{info}</h2>
            </div>
            <h1 className="tc">Mis tutorias</h1>
            <div className="studentCourses">
              <StudentCourses tutories={studentTutories} deleteT={this.deleteTutorie} cal={this.calificar} />
            </div>
          </div>
        )
      } else {
        return (
          <div className="profileStudent">
            <div className="profileInfoS tc">
              <h2>{name}</h2>
              <h2>{email}</h2>
              <hr />
              <h2>{info}</h2>
            </div>
            <h1 className="tc">Mis tutorias</h1>
            <h2>No tutorias registradas</h2>
          </div>
        )
      }
    } else if (tutorTutories.length > 0 && studentTutories.length === 0) {
      return (
        <div className="profileTutor">
          <div className="profileInfoT tc">
            <h2>{name}</h2>
            <h2>{email}</h2>
            <hr />
            <h2>{info}</h2>
          </div>
          <div className="profileTutorC">
            <h1>Tutorias que estoy tomando</h1>
            <h2>No tutorias registradas</h2>
            <h1>Mis tutorias</h1>
            <div className="tutorCourses">
              <TutorCourses tutories={tutorTutories} deleteT={this.deleteTutorieT} />
            </div>
            <h3 className="AgregarCurso center f3" onClick={() => console.log("Agregar")} ><Link to={'/agregar-curso'} >Agregar Curso</Link></h3>
          </div>
        </div>
      );
    } else if (tutorTutories.length === 0 && studentTutories.length > 0) {
      return (
        <div className="profileTutor">
          <div className="profileInfoT tc">
            <h2>{name}</h2>
            <h2>{email}</h2>
            <hr />
            <h2>{info}</h2>
          </div>
          <div className="profileTutorC">
            <h1>Tutorias que estoy tomando</h1>
            <div className="studentCourses">
              <StudentCourses tutories={studentTutories} deleteT={this.deleteTutorieT} cal={this.calificar} />
            </div>
            <h1>Mis tutorias</h1>
            <h2>No tutorias registradas</h2>
          </div>
        </div>
      );
    } else if (tutorTutories.length > 0 && studentTutories.length > 0) {
      return (
        <div className="profileTutor">
          <div className="profileInfoT tc">
            <h2>{name}</h2>
            <h2>{email}</h2>
            <hr />
            <h2>{info}</h2>
          </div>
          <div className="profileTutorC">
            <h1>Tutorias que estoy tomando</h1>
            <div className="studentCourses">
              <StudentCourses tutories={studentTutories} deleteT={this.deleteTutorieT} cal={this.calificar} />
            </div>
            <h1>Mis tutorias</h1>
            <h2>No tutorias registradas</h2>
          </div>
        </div>
      );
    } else {
      {
        return (
          <div className="profileTutor">
            <div className="profileInfoT tc">
              <h2>{name}</h2>
              <h2>{email}</h2>
              <hr />
              <h2>{info}</h2>
            </div>
            <div className="profileTutorC">
              <h1>Tutorias que estoy tomando</h1>
              <h2>No tutorias registradas</h2>
              <h1>Mis tutorias</h1>
              <div className="tutorCourses">
                <TutorCourses tutories={tutorTutories} deleteT={this.deleteTutorieT} />
              </div>
              <h3 className="AgregarCurso center f3" onClick={() => console.log("Agregar")} ><Link to={'/agregar-curso'} >Agregar Curso</Link></h3>
            </div>
          </div>
        );
      }
    }
  }
}

export default ProfilePage;