import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Jadwal = db.define(
  "jadwal",
  {
    hari: {
      type: DataTypes.ENUM(
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
      ),
      allowNull: false,
    },
    jam_mulai: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    jam_selesai: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    kelas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mata_pelajaran: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    guru: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Jadwal;