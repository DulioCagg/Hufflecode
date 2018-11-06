import React from 'react';

import { Link } from 'react-router-dom';

const CourseList = ({ schools }) => (
  <ul className="schools">
    {
      schools.map(school => (
        <li key={school.id}>
          <div className="pa2 ma2 bg-light-green shadow-5 grow">
            <Link to={`/school/${school.id}`}>
              <h3 className="Name">{school.escuela}</h3>
            </Link>
          </div>
        </li>
      ))
    }
  </ul>
);

export default CourseList;
