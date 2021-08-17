import express from "express";

const videoRouter = express.Router();

const handlewatchVideo = (req,res) => res.send("video");


videoRouter.get("/watch",handlewatchVideo);

export default videoRouter;