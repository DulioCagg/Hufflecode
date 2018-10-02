import React, { Component } from 'react';

import TutorST from '../components/TutorST';

export class TutorPage extends Component {
  state = {
    name: 'Dulio',
    stars: 5,
    students: 3,
    
  };

  render() {
    const { tutorInfo } = this.state;
    return (tutorInfo
      ? <TutorST tutor={tutorInfo} />
      : <h1>Loading...</h1>
    );
  }
}

export default TutorPage;
