import Siswa from "../models/Siswa.js";

export const getSiswa = async (req, res) => {
  try {
    const data = await Siswa.findAll();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const createSiswa = async (req, res) => {
  try {
    await Siswa.create(req.body);

    res.status(201).json({
      message: "Data siswa berhasil ditambahkan"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const updateSiswa = async (req, res) => {
  try {
    const { id } = req.params;

    await Siswa.update(req.body, {
      where: { id }
    });

    res.status(200).json({
      message: "Data siswa berhasil diupdate"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const deleteSiswa = async (req, res) => {
  try {
    const { id } = req.params;

    await Siswa.destroy({
      where: { id }
    });

    res.status(200).json({
      message: "Data siswa berhasil dihapus"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};