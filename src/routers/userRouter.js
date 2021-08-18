import express from "express";
import {edit,deleteUSer, logout,see} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/delete", deleteUSer);
userRouter.get(":id", see);


export default userRouter;
