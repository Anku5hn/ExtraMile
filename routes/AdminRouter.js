import {AdminLogin} from '../controllers/AdminCtrl.js'
import express from 'express'
const AdminRouter = express.Router();
AdminRouter.post('/admin-login', AdminLogin);
export {AdminRouter}