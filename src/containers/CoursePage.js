import React, { Component } from 'react';
import CourseList from '../components/CourseList';

export class CoursePage extends Component {
  state = {
    courses: [
      {
        id: 1,
        name: 'P.O.O',
      },
    ]
  }

  render() {
    const { courses } = this.state;
    return courses
      ? <CourseList course={courses}/>
      : <h1>Loading...</h1>;
  }
}

export default CoursePage;
