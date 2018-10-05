import React, { Component } from 'react';

import CoursesHead from '../components/CoursesHeader';
import CoursesBody from '../components/CoursesBody';

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
