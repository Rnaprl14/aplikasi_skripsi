import express from "express";

import {
  getAbsensi,
  createAbsensi,
} from "../controllers/absensiController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getAbsensi);
router.post("/", authMiddleware, roleMiddleware("admin", "guru"), createAbsensi);

export default router; 