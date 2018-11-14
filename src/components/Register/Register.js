import React, { Component } from 'react';
import Axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      student_id: 0,
      type: 'student'
    }
  }

  handleName = (event) => {
    this.setState({ name: event.target.value });
  }

  handleId = (event) => {
    this.setState({ student_id: parseInt(event.target.value) });
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  handleType = (event) => {
    this.setState({ type: event.target.value });
  }

  handleSubmit = () => {
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      student_id: this.state.student_id,
      type: this.state.type
    }

    Axios.get("https://api.mlab.com/api/1/databases/hufflecodedb/collections/students?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5")
      .then(resGet => {
        const ans = resGet.data.filter(user => user.user.email === this.state.email);
        if (ans.length === 1) {
          alert("Email already on use")
        } else {
          if (!this.state.email.includes("@udlap.mx") || this.state.name === "" || this.state.password === "") {
            alert("Inputs incorrectos.")
          } else {
            Axios.post("https://api.mlab.com/api/1/databases/hufflecodedb/collections/students?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5", { user })
            this.props.onSignIn('home')
          }
        }
      })
  }

  render() {
    return (
      <article className="tc br23 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure center">
            <fieldset className="ba b--transparent ph0 mh0"
              id="sign_up">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6"
                  htmlFor="name">Name</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  required="required"
                  onChange={this.handleName} />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6"
                  htmlFor="student_id">Student ID</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="student_id"
                  id="student_id"
                  required="required"
                  placeholder="Example: 173246"
                  onChange={this.handleId} />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6"
                  htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  required="required"
                  placeholder="example@udlap.mx"
                  onChange={this.handleEmail} />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6"
                  htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  required="required"
                  onChange={this.handlePassword} />
              </div>
              <div className="mv3">
                <label className="">Tipo de usuario</label>
                <select onChange={this.handleType}>
                  <option value="estudiante" >Estudiante</option>
                  <option value="tutor" >Tutor</option>
                </select>
              </div>
            </fieldset>
            <div className="">
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
                onClick={() => this.handleSubmit()} />
              <div className="lh-copy mt3">
                <h4 onClick={() => this.props.onSignIn('signIn')} className="f4 link dim black db pointer">Sign in</h4>
              </div>
            </div>
          </div>
        </main>
      </article>
    );
  };
}

export default Register;