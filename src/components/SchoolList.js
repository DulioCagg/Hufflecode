import React from 'react';

import { Link } from 'react-router-dom';

const BachList = ({ bach, onMajor }) => {
  return (<ul className="schools">
    {bach.map(school => (<li key={school.id}>
      <div className="pa2 ma2 bg-light-green shadow-5 grow">
        <Link to={`/bach/${school.id}/`}>
          <button className="Name" onClick={() => onMajor(school.id)} >{school.name}</button>
        </Link>
      </div>
    </li>))}
  </ul>);
};

export default BachList;
