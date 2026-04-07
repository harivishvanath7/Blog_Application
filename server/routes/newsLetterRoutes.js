import express from "express";
import { sendNewsLetter, subscribe, unsubscribe } from "../controllers/newsLetterController.js";

const router = express.Router();

import { protect } from "../middleware/authMiddleware.js";

router.post("/subscribe", subscribe);
router.post("/send", protect, sendNewsLetter);
router.get("/unsubscribe/:token", unsubscribe);

export default router;