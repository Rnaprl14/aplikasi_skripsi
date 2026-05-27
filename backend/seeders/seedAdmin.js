import bcrypt from "bcrypt";
import User from "../models/User.js";
import db from "../config/database.js";

const seedAdmin = async () => {
  try {
    await db.sync();

    const adminExist = await User.findOne({
      where: {
        email: "admin@gmail.com",
      },
    });

    if (adminExist) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(
      "admin123",
      10
    );

    await User.create({
      name: "Administrator",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin seeded successfully");

    process.exit();
  } catch (error) {
    console.log(error);
  }
};

seedAdmin();