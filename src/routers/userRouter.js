import express from "express";
import {edit,deleteUSer} from "../controllers/userController";

const userRouter = express.Router();


userRouter.get("/edit", edit);
userRouter.get("/delete", deleteUSer);

export default userRouter;
