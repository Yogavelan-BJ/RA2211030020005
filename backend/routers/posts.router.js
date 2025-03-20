import { Router } from "express";
import { postsController } from "../controllers/posts.controller.js";

export const router = Router();
router.get("/", postsController);
