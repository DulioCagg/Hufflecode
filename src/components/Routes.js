import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';
import SchoolPages from '../containers/BachPage';
import SchoolPage from '../containers/SchoolPage';
import CoursePage from '../containers/CoursePage';
import CoursesTable from '../containers/CoursesTable';
import TutorPageST from '../containers/TutorPageST';
import ProfilePage from '../containers/ProfilePage';

const Routes = ({ input, type, account }) => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <SchoolPages {...props} input={input} />} />
      <Route exact path="/school/:id" render={(props) => <SchoolPage {...props} input={input} />} />
      <Route exact path="/bach/:id" render={(props) => <CoursePage {...props} input={input} />} />
      <Route exact path="/profile/:id" render={(props) => <ProfilePage {...props} type={type} />} />
      <Route exact path="/tutors/:id" component={CoursesTable} />
      <Route exact path="/tutor/:id" component={TutorPageST} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
