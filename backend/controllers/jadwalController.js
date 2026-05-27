import Jadwal from "../models/Jadwal.js";

export const getJadwal = async (req, res) => {
  try {
    const data = await Jadwal.findAll();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createJadwal = async (req, res) => {
  try {
    await Jadwal.create(req.body);

    res.status(201).json({
      message: "Jadwal berhasil ditambahkan",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};