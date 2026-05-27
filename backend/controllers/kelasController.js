import Kelas from "../models/Kelas.js";

export const getKelas = async (req, res) => {
  try {
    const data = await Kelas.findAll();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const createKelas = async (req, res) => {
  try {
    await Kelas.create(req.body);

    res.status(201).json({
      message: "Kelas berhasil ditambahkan"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};