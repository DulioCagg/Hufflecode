import React, { Component } from 'react';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: ''
    }
  }

  componentDidMount() {
    this.setState({ type: this.props.type })
  }

  render() {
    if(this.state.type === 'student') {
      return (<h1 className="tc">Hello there student!</h1>);
    } else {
      return(<h1 className="tc">Hello there tutor!</h1>)
    }
  }
}

export default ProfilePage;