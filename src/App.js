import React, { Component } from 'react';
import Particles from 'react-particles-js';

import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routes from './components/Routes';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      student: "",
      tutor: "",
      school: 0,
      major: 0,
      subject: 0,
      output: [],
      input: '',
      route: 'signIn',
      signedIn: false,
      type: 'student',
      schools: []
    };
  }

  onSchool = (school) => {
    this.setState({ school: school })
  }

  onMajor = (major) => {
    this.setState({ major: major })
  }

  onSubject = (subject) => {
    this.setState({ subject: subject })
  }

  onSignIn = (route) => {
    if (route === 'home') {
      this.setState({ signedIn: true });
    }
    this.setState({ route: route });
  }

  onSearchChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onLogin = (id, type) => {
    this.setState({ student: id })
    this.setState({ type: type })
  }

  onLogout = (rote) => {
      this.setState({ route: 'signIn' })
      this.setState({ signedIn: false })
      this.setState({ student: "" })
      this.setState({ tutor: "" })
      this.setState({ school: 0 })
      this.setState({ major: 0})
      this.setState({ subject: 0 })
      this.setState({ output: []})
      this.setState({ input: '' })
      this.setState({ route: 'signIn' })
      this.setState({ signedIn: false })
      this.setState({ type: 'student' })
      this.setState({ schools: [] })
      console.log(this.state)
  }

  onTutor = (id) => {
    this.setState({ tutor: id })
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Particles className='particles'
          params={particlesOptions}
        />
        {this.state.route === 'home' ?
          <div> <Header onSearchChange={this.onSearchChange} onLogout={this.onLogout}/>
            <main id="app">
              <Routes 
              input={this.state.input} 
              type={this.state.type} 
              school={this.state.school} 
              student={this.state.student}
              tutor={this.state.tutor} 
              major={this.state.major} 
              subject={this.state.subject} 
              onSchool={this.onSchool} 
              onMajor={this.onMajor} 
              onSubject={this.onSubject}
              onTutor={this.onTutor} />
            </main>
            <Footer />
          </div> : (this.state.route === 'signIn' ?
            <SignIn onSignIn={this.onSignIn} onLogin={this.onLogin} /> :
            <Register onSignIn={this.onSignIn} onLogin={this.onLogin} />
          )
        }
      </React.Fragment>
    );
  }
}

export default App;
