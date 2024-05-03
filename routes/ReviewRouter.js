import express from 'express'
import {UploadReview,GetAllReviews,SearchReview} from '../controllers/ReviewCtrl.js'
const ReviewRouter = express.Router();
ReviewRouter.post('/new-review', UploadReview);
ReviewRouter.get('/get-all-reviews',GetAllReviews)
ReviewRouter.post('/find-reviews',SearchReview)
export {ReviewRouter}