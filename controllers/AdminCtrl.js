import AdminModel from '../models/AdminModel.js'
const AdminLogin = async (req, res) =>{
    try{
        const {email, password} = req.body;
        const admin = await AdminModel.findOne({$and: [{email},{password}]});
        if(!admin){
            res.status(400).send('Admin not found!');
        }else{
            res.status(200).send(admin);
        }
    }catch(err){
        console.log(err);
        res.status(500).send('Server Error!');
    }
};
export {AdminLogin}