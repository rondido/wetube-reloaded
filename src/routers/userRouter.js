import express from "express";


const handleEditUser = (req, res) =>res.send("Edit user");

const userRouter = express.Router();

userRouter.get("/edit", handleEditUser);


export default userRouter;
