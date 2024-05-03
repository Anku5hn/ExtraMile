import EmployeeModel from '../models/EmployeeModel.js'
const AddEmployee = async (req, res) =>{
    try{
        const NewEmployee = new EmployeeModel(req.body);
        await NewEmployee.save();
        res.status(200).send('New Employee Added!')
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}
const getEmployees = async (req, res) =>{
    try{
        const gottenEmployees = await EmployeeModel.find({});
        res.status(200).send(gottenEmployees);
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}
const EmployeeLogin = async (req, res) =>{
    try{
        const {email, password} = req.body;
        const Employee = await EmployeeModel.findOne({$and: [{email},{password}]});
        if(!Employee){
            res.status(400).send('Employee Not Found!');
        }else{
            res.status(200).json({Employee, success: true});
        }
    }catch(err){
        console.log(err);
        res.status(500).send('Server Err!')
    }
}
const DeleteEmployee = async (req, res) =>{
    try{
        await EmployeeModel.findOneAndDelete({_id: req.body._id});
        res.status(200).send('Employee Deleted!');
    }catch(err){
        console.log(err);
        res.status(500).send('Something went wrong!');
    }
}
const UpdateEmployee = async (req, res) =>{
    try{
        await EmployeeModel.findOneAndUpdate({_id:req.body._id},req.body.payload);
        res.status(200).send('Employee Updated!');
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}
const PendingReviews = async (req, res) => {
    try{
        const pending = await EmployeeModel.findOne({email: req.body.email});
        res.status(200).send(pending);
        
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}
export {AddEmployee, getEmployees, EmployeeLogin, DeleteEmployee, UpdateEmployee, PendingReviews}