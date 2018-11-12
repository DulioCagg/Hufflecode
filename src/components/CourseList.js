import React from 'react';

import { Link } from 'react-router-dom';

const CourseList = ({ course }) => {
  return (<ul className="schools">
    {course.map(course => (<li key={course.subject_id}>
      <div className="pa2 ma2 bg-light-green shadow-5 grow">
        <Link to={`/tutors/${course.id}/`}>
          <h3 className="Name">{course.subject_name}</h3>
        </Link>
      </div>
    </li>))}
  </ul>);
};

export default CourseList;