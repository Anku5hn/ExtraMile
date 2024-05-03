import mongoose from 'mongoose'
const ReviewSchema = new mongoose.Schema({
    email: {
        type:String,
     
    },
    reviewing: {
        type:String,
       
    },
    review: {
        type:String,
        
    },
    stars: {
        type:Number,
    }
});
const ReviewModel = mongoose.model('reviews', ReviewSchema);
export default ReviewModel;