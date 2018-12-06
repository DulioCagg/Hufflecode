import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';
import SchoolPages from '../containers/BachPage';
import SchoolPage from '../containers/SchoolPage';
import CoursePage from '../containers/CoursePage';
import CoursesTable from '../containers/CoursesTable';
import TutorPageST from '../containers/TutorPageST';
import ProfilePage from '../containers/ProfilePage';

const Routes = ({ input, type, student, school, major, subject, onSchool, onMajor, onSubject }) => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <SchoolPages {...props} 
<<<<<<< HEAD
      input={input} onSchool={onSchool}/>} />
      <Route exact path="/school/:id" render={(props) => <SchoolPage {...props} input={input} school={school} />} />
      <Route exact path="/bach/:id" render={(props) => <CoursePage {...props} input={input} major={major}/>} />
      <Route exact path="/profile/:id" render={(props) => <ProfilePage {...props} type={type} />} />
      <Route exact path="/tutors/:id" render={(props) => <CoursesTable {...props} major={major} subject={subject}/>} />
=======
      input={input} 
      onSchool={onSchool}/>} />

      <Route exact path="/school/:id" render={(props) => <SchoolPage {...props} 
      input={input} 
      school={school}
      onMajor={onMajor} />} />

      <Route exact path="/bach/:id" render={(props) => <CoursePage {...props} 
      input={input} 
      major={major}
      onSubject={onSubject} />} />


      <Route exact path="/tutors/:id" render={(props) => <CoursesTable {...props} 
      student={student}
      major={major} 
      subject={subject}/>} />

      <Route exact path="/profile/:id" render={(props) => <ProfilePage {...props} 
      type={type} />} />

>>>>>>> 842daaa2f7b9e8399f536b08408345a11b01cc41
      <Route exact path="/tutor/:id" component={TutorPageST} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
