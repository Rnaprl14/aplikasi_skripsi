import express from "express";

import {
  getSiswa,
  createSiswa,
  updateSiswa,
  deleteSiswa,
} from "../controllers/siswaController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getSiswa);
router.post("/", authMiddleware, roleMiddleware("admin", "operator"), createSiswa);
router.put("/:id", authMiddleware, roleMiddleware("admin", "operator"), updateSiswa);
router.delete("/:id", authMiddleware, roleMiddleware("admin"), deleteSiswa);

export default router;