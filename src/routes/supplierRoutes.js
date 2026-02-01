import express from "express";
import {
    createSupplier,
    getSuppliers,
    updateSupplier,
    deleteSupplier
} from "../controllers/supplierController.js";

import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getSuppliers);

router.post(
    "/",
    protect,
    authorizeRoles("ADMIN", "PURCHASE"),
    createSupplier
);

router.put(
    "/:id",
    protect,
    authorizeRoles("ADMIN", "PURCHASE"),
    updateSupplier
);

router.delete(
    "/:id",
    protect,
    authorizeRoles("ADMIN"),
    deleteSupplier
);

export default router;
