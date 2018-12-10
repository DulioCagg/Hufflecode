import React, { Component } from 'react';
import Axios from 'axios';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = () => {
    Axios.get("https://api.mlab.com/api/1/databases/hufflecodedb/collections/students?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5")
      .then(res => {
        const ans = res.data.filter(user => (user.user.email === this.state.email) && (user.user.password === this.state.password))
        if(ans.length === 1) {
          this.props.onLogin(ans[0]._id.$oid, ans[0].user.type)
          this.props.onSignIn('home')
        } else {
          alert("La cuenta o la contraseña es incorrecta")
        }
      })
  }

  render() {
    return (
      <article className="tc br23 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div>
            <p >
              Fun(key)
          </p>
          </div>
          <div className="measure center">
            <fieldset className="ba b--transparent ph0 mh0"
              id="sign_up">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6"
                  htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  required="required"
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
            </fieldset>
            <div className="">
              <input className="black b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
                onClick={() => this.handleSubmit()} />
            </div>
            <div className="lh-copy mt3">
              <h4 onClick={() => this.props.onSignIn('register')} className="f4 link dim black db pointer">Register</h4>
            </div>
          </div>
        </main>
      </article>
    );
  }
};

export default SignIn;