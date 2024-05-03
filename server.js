import morgan from 'morgan'
import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import ConnectDB from './config/ConnectDB.js'
import {EmployeeRouter} from './routes/EmployeeRouter.js'
import {ReviewRouter} from './routes/ReviewRouter.js'
import {AdminRouter} from './routes/AdminRouter.js'
import path from 'path'
import { dirname } from "path";
import { fileURLToPath } from "url";
dotenv.config();
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/api/v1/employee', EmployeeRouter);
app.use('/api/v1/reviews', ReviewRouter);
app.use('/api/v1/admin',AdminRouter);
app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, './client/build/index.html'));
})
const PORT = process.env.PORT || 8080;
ConnectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server Port: ${PORT}`);
    });
});