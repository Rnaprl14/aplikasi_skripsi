import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Absensi = db.define(
  "absensi",
  {
    siswa_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Hadir", "Izin", "Sakit", "Alpha"),
      allowNull: false,
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Absensi;