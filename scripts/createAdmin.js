import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../src/models/User.js";

dotenv.config({ path: "./.env" });

async function createAdmin() {
    await mongoose.connect(process.env.MONGO_URI);

    const email = "admin@erp.com";

    const existing = await User.findOne({ email });
    if (existing) {
        console.log("✅ Admin already exists");
        process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await User.create({
        name: "System Admin",
        email,
        password: hashedPassword,
        role: "ADMIN"
    });

    console.log("✅ Admin created successfully");
    process.exit(0);
}
console.log("USING DB:", process.env.MONGO_URI);


createAdmin();
