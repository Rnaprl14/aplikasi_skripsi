import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Guru = db.define(
  "guru",
  {
    nip: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jenis_kelamin: {
      type: DataTypes.ENUM("Laki-laki", "Perempuan"),
      allowNull: false,
    },
    mata_pelajaran: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    no_hp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Guru;