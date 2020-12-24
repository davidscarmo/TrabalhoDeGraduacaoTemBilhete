import React from 'react'; 
import {BrowserRouter, Route} from 'react-router-dom';

import Scraps from './Pages/Scraps';
import Login from './Pages/Login'; 
import Home from './Pages/Home'; 
import Announcements from './Pages/Announcements';
import TeacherRegister from './Pages/TeacherRegister'; 
import TeacherEdit from './Pages/TeacherEdit'; 
import StudentRegister from './Pages/StudentRegister'; 
import ClassRegister from './Pages/ClassRegister'; 
import ClassesList from './Pages/ClassesList'; 
import ClassEdit from './Pages/ClassEdit'; 
import TeachersList from './Pages/TeachersList'; 
import StudentsList from './Pages/StudentsList'; 
import ScrapsList from './Pages/ScrapsList';
import StudentEdit from './Pages/StudentEdit'; 
import StudentCLassRegister from './Pages/StudentClassRegister'; 
import Requests from './Pages/Requests'; 

const Routes = () => 
{
    return ( 
      <BrowserRouter>
        <Route path='/' exact component={Login} /> 
        <Route path='/home' component={Home} />

        <Route path="/scraps" component={Scraps}/>
        <Route path='/announcements' component={Announcements}/>
        <Route path='/teacherRegister' component={TeacherRegister}/>
        <Route path='/studentRegister' component={StudentRegister}/>
        <Route path='/classRegister' component={ClassRegister}/>
        <Route path='/studentClassRegister/:class_id' component={StudentCLassRegister}/>

        <Route path='/editClass/:class_id/:current_teacher_id' component={ClassEdit} />
        <Route path='/editTeacher/:teacher_id' component={TeacherEdit} />
        <Route path='/editStudent/:student_id' component={StudentEdit} />

        
        <Route path='/classesList' component={ClassesList}/>
        <Route path='/teachersList'component={TeachersList} /> 
        <Route path='/studentsList'component={StudentsList} /> 
        <Route path='/scrapsList' component={ScrapsList} />
        <Route path='/requests' component={Requests} />
      </BrowserRouter>  
    );
}

export default Routes; 