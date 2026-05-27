import express from "express";

import {
  getNilai,
  createNilai,
} from "../controllers/nilaiController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getNilai);
router.post("/", authMiddleware, roleMiddleware("admin", "guru"), createNilai);

export default router;