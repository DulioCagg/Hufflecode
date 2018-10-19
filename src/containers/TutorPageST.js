import React, { Component } from 'react';

import TutorST from '../components/TutorST';
// <TutorST tutor={tutorInfo} />

export class TutorPage extends Component {
  state = {
    tutorInfo: [ {
      id: 1,
      name: 'Dulio',
      stars: 5,
      students: 3
    }]
  }

  render() {
    const { tutorInfo } = this.state;
    console.log(tutorInfo);
    return tutorInfo
      ? <TutorST tutor={tutorInfo} />
      : <h1>Loading...</h1>;
  }
}

export default TutorPage;
