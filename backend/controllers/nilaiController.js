import Nilai from "../models/Nilai.js";

export const getNilai = async (req, res) => {
  try {
    const data = await Nilai.findAll();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const createNilai = async (req, res) => {
  try {
    await Nilai.create(req.body);

    res.status(201).json({
      message: "Nilai berhasil ditambahkan"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};