import React from 'react';

import { Link } from 'react-router-dom';

const BachList = ({ bach }) => {
  return (<ul className="schools">
    {bach.map(school => (<li key={school.id}>
      <div className="pa2 ma2 bg-light-green shadow-5 grow">
        <Link to={`/bach/${school.id}/`}>
          <h3 className="Name">{school.name}</h3>
        </Link>
      </div>
    </li>))}
  </ul>);
};

export default BachList;
