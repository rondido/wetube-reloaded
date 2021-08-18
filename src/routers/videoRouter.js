import express from "express";
import {see, edit,upload,deletevideo} from "../controllers/videoController";


const videoRouter = express.Router();


videoRouter.get("/upload", upload);
videoRouter.get("/:id",see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deletevideo);


export default videoRouter;