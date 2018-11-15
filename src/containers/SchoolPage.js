import React, { Component } from 'react';
import BachList from '../components/SchoolList';
import Axios from 'axios';

export class SchoolPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: 4,
      bach: [],
      input: ''
    }
  }

  componentDidMount() {
    Axios.get('https://api.mlab.com/api/1/databases/hufflecodedb/collections/majors?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5')
      .then(res => {
        this.setState({ bach: res.data.filter(bach => bach.school === this.state.school) }
        )})
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevInput) {
    if (this.props.input !== prevInput.input) {
      this.setState({ input: this.props.input })
    }
  }

  render() {
    const { bach, input } = this.state;
    const filtered = bach.filter(bach => bach.name.toLowerCase().includes(input.toLowerCase()));
    return filtered
      ? <BachList bach={filtered} />
      : <h1>Loading...</h1>;
  }
}

export default SchoolPage;
