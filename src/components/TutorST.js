import React from 'react';

import { Link } from 'react-router-dom';

const TutorST = ({ tutories }) => (
  <ul className="tutorTutories">
    {
      tutories.map(tutorie => (
        <li key={tutorie._id.$oid}>
          <div className="pa2 ma2 bg-light-green shadow-5 grow">
            <button className="Name f3" onClick={() => console.log(tutorie.subject_id)} >{tutorie.name}</button>
        </div>
        </li>
      ))
    }
  </ul>
);

export default TutorST;
