import mongoose from 'mongoose'
const AdminSchema = new mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type:String
    },
    password: {
        type:String
    }
});
const AdminModel = mongoose.model('admin', AdminSchema);
export default AdminModel;