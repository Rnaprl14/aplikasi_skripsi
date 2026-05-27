import express from "express";

import {
  getGuru,
  createGuru,
  updateGuru,
  deleteGuru,
} from "../controllers/guruController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getGuru);
router.post("/", authMiddleware, roleMiddleware("admin", "operator"), createGuru);
router.put("/:id", authMiddleware, roleMiddleware("admin", "operator"), updateGuru);
router.delete("/:id", authMiddleware, roleMiddleware("admin"), deleteGuru);

export default router;