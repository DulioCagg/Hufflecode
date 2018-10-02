import React, { Component } from 'react';

import CoursesHead from '../components/CoursesHeader';
import CoursesBody from '../components/CoursesBody';

import { Link } from 'react-router-dom';


class CoursesTable extends Component {
  render() {
    return (
      <table>
        <CoursesHead />
        <CoursesBody />
      </table>
    );
  }
}

export default CoursesTable;
