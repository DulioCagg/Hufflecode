import React from 'react';

import { Link } from 'react-router-dom';

const CourseList = ({ schools, onSchool }) => (
  <ul className="schools">
    {
      schools.map(school => (
        <li key={school.id}>
          <div className="pa2 ma2 bg-light-green shadow-5 grow">
            <Link to={`/school/${school.id}`}>
              <button className="Name f3" onClick={() => onSchool(school.id)} >{school.escuela}</button>
            </Link>
          </div>
        </li>
      ))
    }
  </ul>
);

export default CourseList;
