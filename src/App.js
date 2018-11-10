import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';

import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routes from './components/Routes';

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
      output: [],
      input: '',
      route: 'signIn',
      signedIn: false,
      schools: []
    };
  }

  onSignIn = (route) => {
    if (route === 'home') {
      this.setState({ signedIn: true });
    }
    this.setState({ route: route });
  }

  componentDidMount() {
    fetch('https://api.mlab.com/api/1/databases/hufflecodedb/collections/schools?apiKey=PN8pEBddMYPVd9NlXaD8ns29CfTJck-1')
      .then(res => res.json())
      .then(schools => {
        this.setState({ schools: schools });
        console.log('Fetch successful\n', schools);
      })
      .catch(err => console.log(err));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
    console.log(this.state.searchField);
  }

  render() {
    return (
      <React.Fragment>
        <Particles className='particles'
          params={particlesOptions}
        />
        {this.state.route === 'home' ?
          <div> <Header onSearchChange={this.onSearchChange} />
            <main id="app">
              <Routes input={this.state.input} />
            </main>
            <Footer />
          </div> : (this.state.route === 'signIn' ?
            <SignIn onSignIn={this.onSignIn} /> :
            <Register onSignIn={this.onSignIn} />

          )
        }
      </React.Fragment>
    );
  }
}

export default App;
