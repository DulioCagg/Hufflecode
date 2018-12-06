import React from 'react';

import { Link } from 'react-router-dom';

const CoursesBody = ({ handleSubscribe, tutories }) => {
  return (<tbody>
    {tutories.map(tutorie =>
      <tr key={tutorie._id}>
        <td><h4 className="grow"><Link to={'/tutor/1'} >{tutorie.name}</Link></h4></td>
        <td><h4>{tutorie.days}</h4></td>
        <td><h4>{tutorie.schedule}</h4></td>
        <td><button className="subscribe f3" onClick={() => handleSubscribe(tutorie, 2)} >Subscribe!</button></td>
      </tr>)}
  </tbody>
  );
};

export default CoursesBody;
