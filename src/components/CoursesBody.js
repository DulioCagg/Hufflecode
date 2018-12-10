import React from 'react';

import { Link } from 'react-router-dom';

const CoursesBody = ({ handleSubscribe, tutories, onTutor }) => {
  return (<tbody>
    {tutories.map(tutorie =>
      <tr key={tutorie._id}>
        <td><Link to={'/tutor/1'} >
          <button className="Name f3" onClick={() => onTutor(tutorie.student_id)} >{tutorie.tutorName}</button>
          </Link></td>
        <td><h4>{tutorie.days}</h4></td>
        <td><h4>{tutorie.schedule}</h4></td>
        <td><button className="subscribe f3" onClick={() => handleSubscribe(tutorie)} >Subscribe!</button></td>
      </tr>)}
  </tbody>
  );
};

export default CoursesBody;
