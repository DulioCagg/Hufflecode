import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';
import SchoolPages from '../containers/BachPage';
import SchoolPage from '../containers/SchoolPage';
import CoursePage from '../containers/CoursePage';
import CoursesTable from '../containers/CoursesTable';
import TutorPage from '../containers/TutorPage/TutorPage';
import ProfilePage from '../containers/ProfilePage/ProfilePage';
import AddTutorie from '../components/AddTutorie';

const Routes = ({ input, type, student, tutor, school, major, subject, onSchool, onMajor, onSubject, onTutor}) => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <SchoolPages {...props} 
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
      subject={subject}
      onTutor={onTutor} />} />

      <Route exact path="/profile/:id" render={(props) => <ProfilePage {...props}
      type={type}
      student={student}
      onTutor={onTutor} />} />

      <Route exact path="/tutor/:id" render={(props) => <TutorPage {...props}
      type={type}
      student={student}
      tutor={tutor} />} />

      <Route exact path="/agregar-curso" render={(props) => <AddTutorie {...props} 
      student={student} />} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
