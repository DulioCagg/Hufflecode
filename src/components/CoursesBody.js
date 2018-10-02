import React from 'react';

import { Link } from 'react-router-dom';

const CoursesBody = () => {
  return (
    <tbody>
      <tr>
        <Link to={'/tutor/1'} >
          <td>Pelusilla</td>
        </Link>
        <td>Mon, Fri</td>
        <td>15:00-16:00</td>
        <td><button className="subscribe">Subscribe!</button></td>
      </tr>
      <tr>
        <td>Oscar</td>
        <td>Mon, Wed, Fri</td>
        <td>11:00-12:00</td>
        <td><button className="subscribe">Subscribe!</button></td>
      </tr>
      <tr>
        <td>Dulio</td>
        <td>Tue, Thu</td>
        <td>18:00-19:00</td>
        <td><button className="subscribe">Subscribe!</button></td>
      </tr>
    </tbody>
  );
};

export default CoursesBody;
