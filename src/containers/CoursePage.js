import React, { Component } from 'react';
import CourseList from '../components/CourseList';

export class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      input: ''
    }
  }

  componentDidMount() {
    fetch('https://api.mlab.com/api/1/databases/hufflecodedb/collections/majors?apiKey=JHmuPiDXdgwWeiOSRS7x5gO9c8XqjsE5')
      .then(res => res.json())
      .then(majors => {
        const test = majors.filter(major => major.id === this.props.major && major.school === this.props.school);
        this.setState({ courses: test[0].subject })
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevInput) {
    if (this.props.input !== prevInput.input) {
      this.setState({ input: this.props.input })
    }
  }

  render() {
    const { courses, input } = this.state;
    if(typeof courses !== "undefined") {
      const filtered = courses.filter(course => course.subject_name.toLowerCase().includes(input.toLowerCase()));
      return filtered
        ?
        <div>
          <h2 className="tc">Elige la materia de la asesoría</h2>
          <CourseList course={filtered} onSubject={this.props.onSubject} />
        </div>
        : <h1>Loading...</h1>;
    } else {
      return courses
        ?
        <div>
          <h2 className="tc">Elige la materia de la asesoría</h2>
          <CourseList course={courses} onSubject={this.props.onSubject} />
        </div>
        : <h1>Loading...</h1>;
    }
  }
}

export default CoursePage;
