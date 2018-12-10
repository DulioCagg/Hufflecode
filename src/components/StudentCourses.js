import React from 'react';

import { Link } from 'react-router-dom';

const StudentCourses = ({ tutories, deleteT, cal, onTutor }) => (
  <ul className="studentTutories">
    {
      tutories.map(tutorie => (
        <li key={tutorie._id.$oid}>
          <div className="pa2 ma2 bg-light-green shadow-5 grow">
            <Link to={'/tutor/1'} >
              <button className="Name b--black f3" onClick={() => onTutor(tutorie.tutor)} >{tutorie.name}</button>
            </Link>
            <button className="Name b--black f3" onClick={() => deleteT(tutorie._id.$oid, tutorie.tutorie)} >Borrar</button>
            <button className="Name b--black f3" onClick={() => cal(tutorie.tutor)} >Calificar</button>
          </div>
        </li>
      ))
    }
  </ul>
);

export default StudentCourses;


