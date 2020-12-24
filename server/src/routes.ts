import express, { response } from 'express'; 
import TeachersController from './controllers/TeachersController';
import StudentsController from './controllers/StudentsController';
import ClassesController from './controllers/ClassesController';
import StudentClassControler from './controllers/StudentClassController';
import AnnouncementsController from './controllers/AnnouncementsController';
import ScrapsController from './controllers/ScrapsController';
import LoginMobileController from './controllers/LoginMobileController';
import EmailController from './controllers/EmailController';

import UsersControlle from './controllers/UsersController'; 
import LoginWebControler from './controllers/LoginWebController'; 
import RequestsController from './controllers/RequestsController'; 

const routes = express.Router(); 

const teachersController = new TeachersController();
const studentsController = new StudentsController();
const classesConroller = new ClassesController();
const studentClassController = new StudentClassControler(); 
const announcementsController = new AnnouncementsController();
const scrapsController = new ScrapsController();
const loginMobileController = new LoginMobileController();
const emailController = new EmailController(); 

const usersController = new UsersControlle(); 
const loginWebController = new LoginWebControler();

const requestsController = new RequestsController();  

routes.get('/teachers', teachersController.index);
routes.post('/teachers', teachersController.create);
routes.put('/teachers', teachersController.editTeacher);
routes.delete('/teachers', teachersController.delTeacher);
routes.get('/teacherData', teachersController.teacherData);

routes.get('/students', studentsController.index);
routes.get('/studentData', studentsController.studentData);
routes.post('/students', studentsController.create);
routes.put('/students', studentsController.editStudent);
routes.delete('/students', studentsController.delStudent);

routes.get('/classes', classesConroller.index);
routes.post('/classes', classesConroller.create);
routes.put('/classes', classesConroller.editClass);
routes.delete('/classes', classesConroller.delClass);
routes.get('/classData', classesConroller.classData);


routes.get('/studentClass', studentClassController.studentByRA);
routes.get('/className', studentClassController.className);
routes.post('/studentClass', studentClassController.create);
routes.delete('/studentClass', studentClassController.delStudent); 

routes.post('/announcements', announcementsController.create);
routes.get('/announcements', announcementsController.index); 

routes.get('/scraps', scrapsController.scrapByRa);
routes.get('/scrapsList', scrapsController.index);
routes.post('/scraps', scrapsController.create);
routes.put('/scraps', scrapsController.editScrapStatus);


routes.get('/loginMobile', loginMobileController.login);


routes.post('/users', usersController.create); 
routes.post('/loginWeb', loginWebController.login); 

routes.get('/email', emailController.sendEmail); 

routes.get('/latestRequests', requestsController.latestRequests); 
routes.get('/requests', requestsController.index); 
routes.put('/requests', requestsController.editRequestStatus); 

export default routes;