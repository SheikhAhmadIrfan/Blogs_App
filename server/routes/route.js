import express from "express";

import {
  signupUser,
  loginUser,
  updateUser,
  getUser,
} from "../controller/user-controller.js";
import {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getPosts,
  postComment,
  likedpost,
  getsearchpost
} from "../controller/post-controller.js";
import { verifyToken } from "../utils/verify.js";
import {
  newComment,
  addComment,
  getComment,
} from "../controller/comment-controller.js";
import multer from 'multer';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null,uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage: storage })

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.put("/:id", updateUser);
router.get("/user/:id", getUser);
router.post("/create",upload.single("image"), createPost);
router.post("/postComment/:id", postComment);
router.post("/likedpost/:id", likedpost);
router.post("/getsearchpost", getsearchpost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);
router.get("/post/:id", getPost);
router.get("/post", getPosts);
router.post("/comment", newComment);
router.put("/comment/:id", addComment);
router.get("/comment/:id", getComment);

export default router;
