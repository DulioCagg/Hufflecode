import React from 'react';

import { Link } from 'react-router-dom';

const CourseList = ({ course }) => {
  return (<ul className="schools">
    {course.map(course => (<li key={course.id}>
      <section className="school-listing">
        <Link to={`/tutors/${course.id}/`}>
          <h3 className="Name">{course.name}</h3>
        </Link>
      </section>
    </li>))}
  </ul>);
};

export default CourseList;