import mongoose from 'mongoose'
const EmployeeSchema = new mongoose.Schema({
email: {
    unique: true,
    type:String,
},
name: {
    type:String,
},
password: {
    type:String,
},
assignment1: {
    type:String,
},
assignment2: {
    type:String,
},
assignment3: {
    type:String,
}
});
const EmployeeModel = mongoose.model('employees', EmployeeSchema);
export default EmployeeModel;