import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Kelas = db.define(
  "kelas",
  {
    nama_kelas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tingkat: {
      type: DataTypes.ENUM("7", "8", "9"),
      allowNull: false,
    },
    wali_kelas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Kelas;