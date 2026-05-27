import Guru from "../models/Guru.js";

export const getGuru = async (req, res) => {
  try {
    const data = await Guru.findAll();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const createGuru = async (req, res) => {
  try {
    await Guru.create(req.body);

    res.status(201).json({
      message: "Data guru berhasil ditambahkan"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const updateGuru = async (req, res) => {
  try {
    const { id } = req.params;

    await Guru.update(req.body, {
      where: { id }
    });

    res.status(200).json({
      message: "Data guru berhasil diupdate"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const deleteGuru = async (req, res) => {
  try {
    const { id } = req.params;

    await Guru.destroy({
      where: { id }
    });

    res.status(200).json({
      message: "Data guru berhasil dihapus"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};