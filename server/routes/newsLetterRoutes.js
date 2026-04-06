import express from "express";
import { sendNewsLetter, subscribe } from "../controllers/newsLetterController.js";

const router = express.Router();

import { protect } from "../middleware/authMiddleware.js";

router.post("/subscribe", subscribe);
router.post("/send", protect, sendNewsLetter);

export default router;