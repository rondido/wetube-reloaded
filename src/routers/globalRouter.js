import express from "express";
import { join, login } from "../controllers/userController";
import { tranding, search } from "../controllers/videoController";


const globalRouter = express.Router();

globalRouter.get("/", tranding);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;



