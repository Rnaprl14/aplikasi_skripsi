import express from "express";

import {
  getKelas,
  createKelas,
} from "../controllers/kelasController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getKelas);
router.post("/", authMiddleware, roleMiddleware("admin", "operator"), createKelas);

export default router;