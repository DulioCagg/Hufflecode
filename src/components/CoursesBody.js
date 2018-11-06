import React from 'react';

import { Link } from 'react-router-dom';

const CoursesBody = () => {
  return (
    <tbody>
      <tr>
        <Link to={'/tutor/1'} >
          <td><h4 className="grow">Pelusilla</h4></td>
        </Link>
        <td><h4>Mon, Fri</h4></td>
        <td><h4>15:00-16:00</h4></td>
        <td><button className="subscribe">Subscribe!</button></td>
      </tr>
    </tbody>
  );
};

export default CoursesBody;
