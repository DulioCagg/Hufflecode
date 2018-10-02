import React from 'react';

import { Link } from 'react-router-dom';

const CourseList = ({ schools }) => (
  <ul className="schools">
    {
      schools.map(school => (
        <li key={school.id}>
          <section className="school-listing">
            <Link to={`/school/${school.id}`}>
              <h3 className="Name">{school.name}</h3>
            </Link>
          </section>
        </li>
      ))
    }
  </ul>
);

export default CourseList;
