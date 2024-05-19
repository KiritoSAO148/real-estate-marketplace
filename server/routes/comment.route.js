import express from "express";
import {
  createComment,
  getListingComments,
  likeComment,
} from "../controllers/comment.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getListingComments/:listingId", getListingComments);
router.put("/likeComment/:commentId", verifyToken, likeComment);

export default router;
