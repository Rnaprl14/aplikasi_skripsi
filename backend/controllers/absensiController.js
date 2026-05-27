import Absensi from "../models/Absensi.js";

export const getAbsensi = async (req, res) => {
  try {
    const data = await Absensi.findAll();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const createAbsensi = async (req, res) => {
  try {
    await Absensi.create(req.body);

    res.status(201).json({
      message: "Absensi berhasil ditambahkan"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};