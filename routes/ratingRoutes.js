import { Router } from "express";
import ratingController from "../controllers/ratingController.js";

const ratingRoutes = Router();

ratingRoutes.get('/ratings', ratingController.getAllRatings);
ratingRoutes.get('/ratings/:id', ratingController.getRatingById);
ratingRoutes.post('/ratings', ratingController.postRating);
ratingRoutes.put('/ratings/:id', ratingController.putRating);
ratingRoutes.delete('/ratings/:id', ratingController.deleteRating);

export default ratingRoutes;