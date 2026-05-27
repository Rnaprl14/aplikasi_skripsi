import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import db from "./config/database.js";

import authRoutes from "./routes/authRoutes.js";
import siswaRoutes from "./routes/siswaRoutes.js";
import guruRoutes from "./routes/guruRoutes.js";
import kelasRoutes from "./routes/kelasRoutes.js";
import jadwalRoutes from "./routes/jadwalRoutes.js";
import nilaiRoutes from "./routes/nilaiRoutes.js";
import absensiRoutes from "./routes/absensiRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend Sistem Akademik Running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/siswa", siswaRoutes);
app.use("/api/guru", guruRoutes);
app.use("/api/kelas", kelasRoutes);
app.use("/api/jadwal", jadwalRoutes);
app.use("/api/nilai", nilaiRoutes);
app.use("/api/absensi", absensiRoutes);

const startServer = async () => {
  try {
    await db.authenticate();
    console.log("Database Connected");

    await db.sync();
    console.log("Database Synced");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Database Connection Failed:", error.message);
  }
};

startServer();