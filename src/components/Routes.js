import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';
import SchoolPages from '../containers/BachPage';
import SchoolPage from '../containers/SchoolPage';
import CoursePage from '../containers/CoursePage';
import CoursesTable from '../containers/CoursesTable';
import TutorPageST from '../containers/TutorPageST';

const Routes = ({ filteredData }) => {  
  return (
    <Switch>
      <Route exact path="/" component={SchoolPages} />
      {/* <Route exact path="/" render={(props) => <SchoolPages {...props} filteredData={filteredData}/>} /> */}
      <Route exact path="/school/:id" component={SchoolPage} />
      <Route exact path="/bach/:id" component={CoursePage} />
      <Route exact path="/tutors/:id" component={CoursesTable} />
      <Route exact path="/tutor/:id" component={TutorPageST} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
