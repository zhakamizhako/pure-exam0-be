import { Router } from "express";
import { homeHandler } from "../controllers/recordController";

const router = Router();

router.get("/", homeHandler);

export default router;