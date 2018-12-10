import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class AddTutorie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tutorName: "",
      student_id: "",
      major_id: 0,
      subject_id: 0,
      student_id: "",
      name: "",
      days: "",
      schedule: "",
      amount: 0,
      current: 0
    }
  }

  handleMajor = (event) => {
    this.setState({ major_id: parseInt(event.target.value) });
  }

  handleSubject = (event) => {
    let info = String(event.target.value).split(",")
    this.setState({ subject_id: parseInt(info[0]) });
    this.setState({ name: info[1] });
  }

  handleDays = (event) => {
    let days = this.state.days
    this.setState({ days: days + event.target.value + " " });
  }

  handleSchedule = (event) => {
    this.setState({ schedule: event.target.value });
  }

  handleAmount = (event) => {
    this.setState({ amount: parseInt(event.target.value) });
  }

  handleSubmit = () => {
    Axios.get(`https://api.mlab.com/api/1/databases/hufflecodedb/collections/students/${this.state.student_id}?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5`).then(res => {
      Axios.post("https://api.mlab.com/api/1/databases/hufflecodedb/collections/subject-tutor?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5", {
        tutorName: res.data.user.name,
        major_id: this.state.major_id,
        subject_id: this.state.subject_id,
        student_id: this.state.student_id,
        name: this.state.name,
        days: this.state.days,
        schedule: this.state.schedule,
        amount: this.state.amount,
        current: 0

      })
        .then(alert("Se dio de alta la nueva asesoria"))
    })
  }

  componentDidMount() {
    this.setState({ student_id: this.props.student })
  }

  render() {
    return (
      <article className="tc br23 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure center">
            <fieldset className="ba b--transparent ph0 mh0"
              id="sign_up">
              <legend className="f1 fw6 ph0 mh0">Agrega una tutoria</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6"
                  htmlFor="">Escuela</label>
                <select>
                  <option value="1">Humanidades</option>
                  <option value="2">Ciencias Sociales</option>
                  <option value="3">Ciencias</option>
                  <option value="4">Ingenieria</option>
                  <option value="5">Negocios y Economia</option>
                </select>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6"
                  htmlFor="">Carrera</label>
                <select onChange={this.handleMajor}>
                  <option value="1">Ambiental</option>
                  <option value="2">Biomédica</option>
                  <option value="3">Civil</option>
                  <option value="4">Energía</option>
                  <option value="5">Industrias Alimentarias</option>
                  <option value="6">Logística</option>
                  <option value="7">Robótica</option>
                  <option value="8">Sistemas</option>
                  <option value="9">Industrial</option>
                  <option value="10">Mecánica</option>
                  <option value="11">Mecatrónica</option>
                  <option value="12">Química</option>
                </select>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6"
                  htmlFor="">Materia</label>
                <select onChange={this.handleSubject}>
                  <option value="1,Español I">Español I</option>
                  <option value="2,Intro a la Programacion">Intro a la Programacion</option>
                  <option value="3,Intro a Sistemas">Intro a Sistemas</option>
                  <option value="4,Précalculo">Précalculo</option>
                  <option value="5,Lengua Extranjera I">Lengua Extranjera I</option>
                  <option value="6,Razonamiento Cuantitativo">Razonamiento Cuantitativo</option>
                </select>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6"
                  htmlFor="text">Dias</label>
                <input type="checkbox" name="Lunes" value="Lun" onChange={this.handleDays} />Lunes<br></br>
                <input type="checkbox" name="Martes" value="Mar" onChange={this.handleDays} />Martes<br></br>
                <input type="checkbox" name="Miercoles" value="Mie" onChange={this.handleDays} />Miercoles<br></br>
                <input type="checkbox" name="Jueves" value="Jue" onChange={this.handleDays} />Jueves<br></br>
                <input type="checkbox" name="Viernes" value="Vie" onChange={this.handleDays} />Viernes<br></br>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6"
                  htmlFor="password">Horario</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="text"
                  id="text"
                  required="required"
                  placeholder="Ejemplo: 10 - 11 / 15 - 16"
                  onChange={this.handleSchedule} />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6"
                  htmlFor="password">Capacidad</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="text"
                  id="text"
                  required="required"
                  onChange={this.handleAmount} />
              </div>
            </fieldset>
            <div className="lh-copy mt3">
              <h4 onClick={() => this.handleSubmit()} className="f4 link dim black db pointer"><Link to={'/profile/1'}>Agregar</Link></h4>
            </div>
          </div>
        </main>
      </article>
    );
  }
};

export default AddTutorie;