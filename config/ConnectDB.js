import mongoose from 'mongoose'
const ConnectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connection: ${mongoose.connection.host}`);
    }catch(err){
        console.log(err);
    }
}
export default ConnectDB;