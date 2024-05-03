import {AddEmployee, getEmployees, EmployeeLogin, DeleteEmployee,UpdateEmployee, PendingReviews} from '../controllers/EmployeeCtrl.js'
import express from 'express'
const EmployeeRouter = express.Router();
EmployeeRouter.post('/add-employee', AddEmployee);
EmployeeRouter.get('/get-employees', getEmployees);
EmployeeRouter.post('/employee-login', EmployeeLogin);
EmployeeRouter.post('/delete-employee', DeleteEmployee);
EmployeeRouter.post('/update-employee', UpdateEmployee);
EmployeeRouter.post('/employee-login',EmployeeLogin);
EmployeeRouter.post('/pending-reviews',PendingReviews);
export {EmployeeRouter}