import express from "express";
import { createGRN } from "../controllers/grnController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
    "/",
    protect,
    authorizeRoles("ADMIN", "INVENTORY"),
    createGRN
);

export default router;
