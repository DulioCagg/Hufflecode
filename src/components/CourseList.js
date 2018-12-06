import React from 'react';

import { Link } from 'react-router-dom';

const CourseList = ({ course, onSubject }) => {
  return (<ul className="schools">
    {course.map(course => (<li key={course.subject_id}>
      <div className="pa2 ma2 bg-light-green shadow-5 grow">
        <Link to={`/tutors/${course.subject_id}/`}>
          <button className="Name f3" onClick={() => onSubject(course.subject_id)} >{course.subject_name}</button>
        </Link>
      </div>
    </li>))}
  </ul>);
};

export default CourseList;