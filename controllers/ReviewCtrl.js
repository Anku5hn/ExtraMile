import ReviewModel from '../models/ReviewModel.js'
const UploadReview = async (req, res) =>{
    try{
        const NewReview = new ReviewModel(req.body);
        await NewReview.save();
        res.status(200).send('Review Added!')
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}
const GetAllReviews = async (req, res) =>{
    try{
        const reviews = await ReviewModel.find({});
        res.status(200).send(reviews);
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }

}
const SearchReview = async (req, res) =>{
    try{
        const FoundReviews = await ReviewModel.find({email: req.body.email});
        res.status(200).send(FoundReviews);
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}
export {UploadReview, GetAllReviews, SearchReview}