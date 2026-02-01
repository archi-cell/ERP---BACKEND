import express from "express";
import {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";

import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// Anyone logged in
router.get("/", protect, getProducts);

// Admin & Inventory only
router.post(
    "/",
    protect,
    authorizeRoles("ADMIN", "INVENTORY"),
    createProduct
);

router.put(
    "/:id",
    protect,
    authorizeRoles("ADMIN", "INVENTORY"),
    updateProduct
);

router.delete(
    "/:id",
    protect,
    authorizeRoles("ADMIN"),
    deleteProduct
);

export default router;
