import express from "express";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

// Admin only
router.get(
    "/",
    protect,
    authorizeRoles("ADMIN"),
    async (req, res) => {
        const users = await User.find().select("-password");
        res.json(users);
    }
);

export default router;
