import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Nilai = db.define(
  "nilai",
  {
    siswa_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mata_pelajaran: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nilai_tugas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nilai_uts: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nilai_uas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    semester: {
      type: DataTypes.ENUM("Ganjil", "Genap"),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Nilai;