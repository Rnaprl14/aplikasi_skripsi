import express from "express";

import {
  getJadwal,
  createJadwal,
} from "../controllers/jadwalController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getJadwal);
router.post("/", authMiddleware, roleMiddleware("admin", "operator"), createJadwal);

export default router;