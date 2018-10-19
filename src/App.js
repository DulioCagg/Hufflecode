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
      schools: [
        {
          id: 1,
          name: 'Art'
        },
        {
          id: 2,
          name: 'Social Science'
        },
        {
          id: 3,
          name: 'Science'
        },
        {
          id: 4,
          name: 'Engineering'
        },
        {
          id: 5,
          name: 'Business'
        }
      ]
    };
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

  render() {
    const filteredData = this.state.schools.filter(data => {
      return data.name.toLowerCase().includes(this.state.input.toLowerCase());
    });
    console.log(filteredData);
    return (
      <React.Fragment>
        <Particles className='particles'
          params={particlesOptions}
        />
        {this.state.route === 'home' ?
          <div> <Header onSearchChange={this.onSearchChange} />
            <main id="app">
              <Routes data={filteredData}/>
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
