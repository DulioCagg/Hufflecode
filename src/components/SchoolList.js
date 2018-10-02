import React from 'react';

import { Link } from 'react-router-dom';

const BachList = ({ bach }) => {
  return (<ul className="schools">
    {bach.map(school => (<li key={school.id}>
      <section className="school-listing">
        <Link to={`/bach/${school.id}/`}>
          <h3 className="Name">{school.name}</h3>
        </Link>
      </section>
    </li>))}
  </ul>);
};

export default BachList;
